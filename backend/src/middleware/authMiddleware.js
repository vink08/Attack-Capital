 
const jwt = require("jsonwebtoken");
const User = require("../models/User");
 
const JWT_SECRET = "ASDFGHJ";  
exports.protect = async (req, res, next) => {
  let token;

  // Check if Authorization header contains Bearer token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  // If no token, return unauthorized response
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Not authorized to access this route",
    });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Fetch user and attach to request
    req.user = await User.findById(decoded.id).select("-password");

    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};
