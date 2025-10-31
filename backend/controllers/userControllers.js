import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
    
    try {
        // Guard against req.body being undefined to avoid destructuring errors.
        if (!req.body) {
            console.warn("registerUser: req.body is undefined. Check client Content-Type or body-parser middleware.");
            return res.status(400).json({ success: false, message: "Request body is missing. Ensure you send JSON with the appropriate Content-Type header (application/json)." });
        }
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({success: false, message: "All fields are required" });
        }
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const UserData = new User({
            name,
            email,
            password: hashedPassword
        });
        const newUser = new User(UserData);
        const user = await newUser.save();

        // Create JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        res.status(201).json({success: true, token, user: {name:user.name} });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({success: false, message: error.message });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }   
        // Find user by email
        const user = await User.findOne({ email }); 
        if (!user) {
            return res.status(400).json({ success: false, message: "User does not exist" });
        }
        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }
        // Create JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        res.status(200).json({ success: true, token, user: {name:user.name} });
    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

export const userCredits = async (req, res) => {
    try {
        // Prefer user id from auth middleware (req.userId). Fall back to body for compatibility.
        const userId = req.userId || (req.body && req.body.userId);
        if (!userId) {
            return res.status(400).json({ success: false, message: "User id missing" });
        }
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }       
        res.status(200).json({ success: true, credits: user.creditBalance, user: {name: user.name} });
    } catch (error) {
        console.error("Error fetching user credits:", error);
        res.status(500).json({ success: false, message: error.message });
    }
}