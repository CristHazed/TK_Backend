const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    IGN: {
        type: String,
        required: true
    },
    UID: {
        type: Number,
        required: true
    },
    streamerId: {
        type: String,
        required: true
    },
    inGProfile: {
        url: String,
        public_id: String
    },
    fbProfile: {
        url: String,
        public_id: String
    },
    FB: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Streamer', 'Casual', 'Competitive']
    }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);