import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        lastname: {
                type: String,
                required: true,
                min: 2,
                max: 50,
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
            min: 8,
            max: 50,
        },
        picturePath: {
            type: String,
            default: "",
        },
        friends : {
            type: Array,
            default: [],
        },
        location: String,
        occupation: String,
        viewedProfile: Number,
        impressions: Number,
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;