import { registerUser, loginUser, userCredits } from "../controllers/userControllers.js";
import express from "express";
import { authMiddleware } from "../middleware/auth.js";

const userRouter = express.Router();
// localhost:4000/api/user/register
userRouter.post("/register", registerUser);
// localhost:4000/api/user/login
userRouter.post("/login", loginUser);
// localhost:4000/api/user/credits
userRouter.post("/credits",authMiddleware ,userCredits);

export default userRouter;