const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    chat : String,
    user: {
            id: {
                type: mongoose.Schema.ObjectId,
                ref: "User",
            },
            name: String,
        },
    },
    { timestamps : true }
);

module.exports = mongoose.model("Chat", chatSchema);
