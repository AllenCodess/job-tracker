import jwt from "jsonwebtoken";

export const protect = async (req, res, next) => {
  let token;
  try {
    token = req.cookies.token;

    console.log(token);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ status: "fail", message: error.message });
  }
};
