const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    company: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Post",postSchema);