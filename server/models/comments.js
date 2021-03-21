const mongoose = require("mongoose")

const commentSchema = mongoose.Schema({
    title: String,
    message: String,
    author: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})
const Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment