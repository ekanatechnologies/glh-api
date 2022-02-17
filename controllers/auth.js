import Auth from "../models/user.js";
import bcrypt from "bcrypt";



export const Register = async (req, res) => {
    try {
        const { name, email, password ,account, profilePicture} = req.body;
        const user = await Auth.findOne({ email });
        if (user) {
            return res.status(400).json({
                message: "User already exists"
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new Auth({
            name,
            email,
            profilePicture,
            account,
            password: hashedPassword
        });
        await newUser.save();
        res.status(201).json({
            message: "User created successfully"
        });

        
    } catch (error) {
        res.status(500).json({
            message: "Error registering user",
            error: error.message
        });
        
    }
}

export const Login = async (req, res) => {
    try {
       const {email,password} = req.body;
        const user = await Auth.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "User does not exist"
            });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({
                message: "Invalid password"
            });
        }
        res.status(200).json({
            message: "User logged in successfully",
            user: user
        });
        
    } catch (error) {
        res.status(500).json({
            message: "Error logging in user",
            error: error.message
        });
        
    }               
}

export const getUserByAccount = async (req, res) => {
    try {
       const account = req.params.currentAccount;
        const user = await Auth.findOne({ account });
        if (!user) {
            return res.status(400).json({
                message: "User does not exist"
            });
        }
        res.status(200).json({
          user
        });
        
    } catch (error) {
        res.status(500).json({
            message: "Error adding account",
            error: error.message
        });
        
    }               
}
export const addAccount = async (req, res) => {
    try {
       const {email,password,account} = req.body;
        const user = await Auth.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "User does not exist"
            });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({
                message: "Invalid password"
            });
        }
        user.account.push(account);
        await user.save();
        res.status(200).json({
            user
        });
        
    } catch (error) {
        res.status(500).json({
            message: "Error adding account",
            error: error.message
        });
        
    }               
}