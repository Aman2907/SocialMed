const mongoose = require('mongoose');

const Userschema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 22,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    profilePicture: {
        type: String,
        default: ""
    },
    coverPic: {
        type: String,
        default: ""
    },
    followers: {
        type: Array,
        default: [],
    },
    following: {
        type: Array,
        default: []
    },
    desc: {
        type: String,
        max: 50,
    },
    city: {
        type: String,
        max: 50,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    from: {
        type: String,
        max: 50,
      },
      relationship: {
        type: Number,
        enum: [1, 2, 3],
    },
}, {
    timestamps: true
}

);

module.exports = mongoose.model("User", Userschema)