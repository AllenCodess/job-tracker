const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    String,
    required: [true, "A user must have a name."],
    trim: true,
  },
  email: {
    String,
    required: [true, "A user must have a email."],
    trim: true,
    lowercase: true,
    unique: true,
  },
  password: {
    String,
    required: [true, "A user must have a passoword."],
    minlength: 8,
  },
  passwordConfirm: {
    String,
    required: [true, "Passwords must match"],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
