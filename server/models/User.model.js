const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    otherNames: { // "Other Name(s)" field
        type: String,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Each email must be unique
        trim: true,
        lowercase: true,
    },
    username: {
        type: String,
        required: true,
        unique: true, // Each username must be unique
        trim: true,
    },
    phoneNumber: {
        type: String,
    },
    dateOfBirth: {
        type: Date,
    },
    password: { // Will not exist for OAuth users
        type: String,
        minlength: 6,
    },
    // For social logins
    googleId: {
        type: String,
    },
    facebookId: {
        type: String,
    },
    rating: {
        type: Number,
        default: 0
    },
    ratingCount: {
        type: Number,
        default: 0
    },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt

module.exports = mongoose.model('User', UserSchema);