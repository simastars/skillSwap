const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/User.model');

module.exports = function(passport) {
    // JWT Strategy
    const opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET
    };
    passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
        try {
            const user = await User.findById(jwt_payload.user.id);
            if (user) return done(null, user);
            return done(null, false);
        } catch (err) {
            return done(err, false);
        }
    }));
    // Google Strategy
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/api/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
        const newUser = {
            googleId: profile.id,
            firstName: profile.name.givenName,
            otherNames: profile.name.familyName,
            email: profile.emails[0].value,
            // Create a default username or prompt user to create one later
            username: `user_${profile.id}` 
        };

        try {
            let user = await User.findOne({ googleId: profile.id });

            if (user) {
                done(null, user); // User exists, log them in
            } else {
                // If no user with googleId, check if email is already in use
                user = await User.findOne({ email: profile.emails[0].value });
                if (user) {
                    // Optional: Link account or return error
                    console.log('Email already in use, account linking not implemented.');
                    return done(null, false, { message: 'Email is already registered.' });
                }
                
                // Create a new user
                user = await User.create(newUser);
                done(null, user);
            }
        } catch (err) {
            console.error(err);
            done(err, false);
        }
    }));

    // Facebook Strategy (very similar)
    passport.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: "/api/auth/facebook/callback",
        profileFields: ['id', 'emails', 'name'] // Fields you want from Facebook
    },
    async (accessToken, refreshToken, profile, done) => {
        const newUser = {
            facebookId: profile.id,
            firstName: profile.name.givenName,
            otherNames: profile.name.familyName,
            email: profile.emails[0].value,
            username: `user_${profile.id}`
        };

        try {
            let user = await User.findOne({ facebookId: profile.id });
            if (user) {
                return done(null, user);
            } else {
                user = await User.findOne({ email: profile.emails[0].value });
                if (user) {
                    return done(null, false, { message: 'Email is already registered.' });
                }
                user = await User.create(newUser);
                return done(null, user);
            }
        } catch (err) {
            console.error(err);
            return done(err, false);
        }
    }));

    // Serializing and Deserializing is crucial for session management
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => done(err, user));
    });
};