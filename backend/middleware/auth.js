import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    // Support either a custom "token" header or an Authorization: Bearer <token>
    const token = req.headers.token || (req.headers.authorization && req.headers.authorization.split(" ")[1]);
    if (!token) {
        return res.status(401).json({ success: false, message: "No token, authorization denied" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded && decoded.id) {
            req.userId = decoded.id;
        } else {
            return res.status(401).json({ success: false, message: "Token is not valid" });
        }
        next();
    } catch (error) {
        res.status(401).json({ success: false, message: error.message });
    }
};