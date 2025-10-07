import userModel from "../models/userModel.js"
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
}


//route for user login
const loginUser = async (req, res) => {
    try {

        const { email, password } = req.body;
        const user = await userModel.findOne({ email })

        if (!user) {
            return res.json({ success: false, message: "user doesnt exist" })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = createToken(user._id);
            return res.json({ success: true, message: "User logged in successfully", token })
        }
        else {
            return res.json({ success: false, message: "Invalid credentials" });
        }


    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: "Failed to login" });
    }

}


//route for user register
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const exist = await userModel.findOne({ email });
        if (exist) {
            return res.json({ success: false, message: "User already exists" });
        }

        // Validating email format and strong password 

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Password must be at least 8 characters long" });
        }

        //hashing the user password

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user 

        const newUser = new userModel({ name, email, password: hashedPassword });
        const user = await newUser.save();

        // Create token for user 

        const token = createToken(user._id)
        res.json({ success: true, message: "User registered successfully", token });

    }
    catch (error) {

        console.log(error);
        res.json({ success: false, message: "Failed to register" });
    }

}

// Route for admin login 

const adminLogin = async (req, res) => {

    try {
        const { username, password } = req.body;
        if (username === process.env.ADMIN_NAME && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(username + password, process.env.JWT_SECRET);
            return res.json({ success: true, message: "Admin logged in successfully", token });
        }
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: "Failed to login" });
    }

}

export { loginUser, registerUser, adminLogin };