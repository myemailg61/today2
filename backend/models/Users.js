const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    hashed_password: {
        type: String,
        required: true,
    },
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel;

