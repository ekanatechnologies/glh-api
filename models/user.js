
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const authSchema = new mongoose.Schema({
    isAdmin: {
        type: Boolean,
        default: false
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    account:[String],
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        default: "https://res.cloudinary.com/dzqbzqgjw/image/upload/v1589788981/default_profile_image_qxqjqe.png"
        },   

},
{timestamps: true}
);

authSchema.methods.comparePassword =  function(password){
    return bcrypt.compareSync(password, this.password);
   
};

const Auth= mongoose.model("User", authSchema);
export default Auth;