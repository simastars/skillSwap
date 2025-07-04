const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const passport = require('passport');
const authController = require('../controllers/auth.controller');


// @route   POST api/auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post(
    '/login',
    [
        // Validation for the login route
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password is required').exists(),
    ],
    authController.loginUser
);

// --- Standard Registration Route ---

// @route   POST api/auth/register
// @desc    Register user
// @access  Public
router.post(
    '/register',
    [
        // Validation middleware
        check('firstName', 'First Name is required').not().isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('username', 'Username is required').not().isEmpty(),
        check('password', 'Password must be 6 or more characters').isLength({ min: 6 }),
        check('confirmPassword').custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Passwords do not match');
            }
            return true;
        }),
    ],
    authController.registerUser
);


// --- Google OAuth Routes ---

// @route   GET api/auth/google
// @desc    Initiate Google OAuth flow
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// @route   GET api/auth/google/callback
// @desc    Google OAuth callback URL
router.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: '/login-failed' }),
    authController.socialLoginSuccess // Handle success
);


// --- Facebook OAuth Routes ---

// @route   GET api/auth/facebook
// @desc    Initiate Facebook OAuth flow
router.get('/facebook', passport.authenticate('facebook', { scope: ['email', 'public_profile'] }));

// @route   GET api/auth/facebook/callback
// @desc    Facebook OAuth callback URL
router.get(
    '/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login-failed' }),
    authController.socialLoginSuccess // Handle success
);

module.exports = router;