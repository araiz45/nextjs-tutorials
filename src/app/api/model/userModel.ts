import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }, 
    email: {
        type: String,
        required: true,
        unique: true
    }, 
    password: {
        type: String,
        required: true
    },
    pic: {
        type: String,
        default: "dummy.jpg",
    }
})

const userModel = mongoose.models.Users || mongoose.model("Users", userSchema)

export default userModel;