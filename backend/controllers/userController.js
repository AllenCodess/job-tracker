import User from "../models/userModel.js";

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

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: "success" });
    console.log("The user has been deleted");
  } catch (error) {
    res.status(400).json({ status: "fail", messgae: error.message });
  }
};

export default createUser;
