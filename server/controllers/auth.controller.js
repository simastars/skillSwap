const User = require('../models/User.model');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

// @desc    Authenticate user & get token (Login)
exports.loginUser = async (req, res) => {
    // 1. Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        // 2. Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }
        
        // 3. For social login users who try to log in with a password
        if (!user.password) {
            return res.status(400).json({ msg: 'This account was created with a social provider. Please use Google or Facebook to log in.' });
        }

        // 4. Check if password matches
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // 5. User matched, create JWT payload
        const payload = {
            user: {
                id: user.id,
                firstName: user.firstName,
            },
        };

        // 6. Sign the token and send it back
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }, // e.g., '1d' for one day
            (err, token) => {
                if (err) throw err;
                res.json({ token }); // Send token to client
            }
        );

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
// @desc    Register a new user from the form
exports.registerUser = async (req, res) => {
    // 1. Validate incoming data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, otherNames, email, phoneNumber, username, dateOfBirth, password } = req.body;

    try {
        // 2. Check if user already exists (by email or username)
        let user = await User.findOne({ $or: [{ email }, { username }] });
        if (user) {
            return res.status(400).json({ msg: 'User with this email or username already exists' });
        }

        // 3. Create a new user instance
        user = new User({
            firstName,
            otherNames,
            email,
            phoneNumber,
            username,
            dateOfBirth,
        });

        // 4. Hash the password
        const salt = await bcrypt.genSalt(parseInt(process.env.BCRYPT_SALT_ROUNDS));
        user.password = await bcrypt.hash(password, salt);

        // 5. Save the user to the database
        await user.save();

        // 6. Respond (in a real app, you'd probably send a JWT here)
        res.status(201).json({ msg: 'User registered successfully', userId: user.id });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// @desc    Callback logic for Google/Facebook success
// This function will be called by the Passport strategy
exports.socialLoginSuccess = (req, res) => {
    // Passport attaches the user to req.user after successful authentication
    if (req.user) {
        // Here you would typically create a JWT and send it to the client
        // Then redirect them to your frontend's dashboard.
        console.log('Social Login successful:', req.user);
        // For now, we'll just send a success message.
        // In a real app, you would redirect:
        // res.redirect('http://youfrontend.com/dashboard');
        res.status(200).json({ 
            message: "Successfully logged in via social provider", 
            user: {
                id: req.user.id,
                firstName: req.user.firstName,
                email: req.user.email
            } 
        });
    } else {
        res.status(401).json({ message: "Authentication failed" });
    }
};