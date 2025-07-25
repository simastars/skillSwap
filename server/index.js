const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const passport = require('passport');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Connect to Database
connectDB();

// Passport Config
require('./config/passport-setup')(passport);

// Middlewares
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({ extended: false }));

// Passport middleware
// Note: Session middleware is required for persistent login sessions.
// For a stateless API (using JWTs), session would be false.
// For OAuth redirects, sessions are often the simplest way.
app.use(require('express-session')({ 
    secret: 'a very secret keyboard cat', 
    resave: false, 
    saveUninitialized: false 
}));
app.use(passport.initialize());
app.use(passport.session());

// Define Routes
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/skills', require('./routes/skill.routes'));

// Simple route for failed login
app.get('/login-failed', (req, res) => {
    res.status(401).json({
        success: false,
        message: 'failure'
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));