import User from "../models/User.js";
import FormData from "form-data";
import axios from "axios";

export const generateImage = async (req, res) => {
    try {
        const { prompt } = req.body;
        const userId = req.userId;
        if (!prompt) {
            return res.status(400).json({ success: false, message: "Prompt is required" });
        }
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        if (user.creditBalance === 0 || user.creditBalance < 0) {
            return res.status(403).json({ success: false, message: "Insufficient credits Balance", creditBalance: user.creditBalance });
        }

        const formData = new FormData();
        formData.append("prompt", prompt);

        const { data } = await axios.post("https://clipdrop-api.co/text-to-image/v1", formData, {
            headers: {
                "x-api-key": process.env.CLIPDROP_API_KEY,
            },
            responseType: "arraybuffer"
        })
        const imageBase64 = Buffer.from(data, "binary").toString("base64");
        const imageUrl = `data:image/png;base64,${imageBase64}`;

        // Deduct 1 credit
        await User.findByIdAndUpdate(user._id, { creditBalance: user.creditBalance - 1 });
        res.status(200).json({ success: true, message: "Image Generate", imageUrl, creditBalance: user.creditBalance - 1 });
    } catch (error) {
        console.error("Error generating image:", error);
        res.status(500).json({ success: false, message: error.message });
    }
}
