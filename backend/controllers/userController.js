import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

export const createUser = async (req, res) => {
  try {
    const { name, email, password, passwordConfirm } = req.body;

    const newUser = await User.create({
      name,
      email,
      password,
      passwordConfirm,
    });

    const token = signToken(newUser._id);
    res.status(201).json({ status: "success", data: { user: newUser }, token });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

export const authUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ status: "fail", message: "Provide a email or password" });
    }
    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ status: "fail", message: "Invalid email or password" });
    }

    const token = signToken(user._id);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token,
    });
  } catch (error) {
    res.status(401).json({ status: "fail", message: error.message });
  }
};

export const findUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({ status: "success", results: users.length, data: users });
  } catch (error) {
    res.status(400).json({ status: "failed", message: error.message });
  }
};

export const findUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({ status: "success", data: user });
  } catch (error) {
    res.status(400).json({ status: "failed", message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(201).json({ status: "success", data: user });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: "success" });
    console.log(`${user} has been deleted`);
  } catch (error) {
    res.status(400).json({ status: "fail", messgae: error.message });
  }
};

export default createUser;
