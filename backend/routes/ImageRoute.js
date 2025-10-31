import express from "express";
import { generateImage } from "../controllers/imageControllers.js";
import { authMiddleware } from "../middleware/auth.js";

const Imagerouter = express.Router();

Imagerouter.post("/generate-image", authMiddleware, generateImage);

export default Imagerouter;