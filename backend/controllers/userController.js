import User from "../models/userModel.js";

export const createUser = async (req, res) => {
  try {
    const { name, email, password, passwordConfirm } = req.body;

    const newUser = await User.create({
      name,
      email,
      password,
      passwordConfirm,
    });
    res.status(201).json({ status: "success", data: { user: newUser } });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

export default createUser;
