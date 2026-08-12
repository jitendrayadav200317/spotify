import userModel from "../models/userModel.js";

import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const { username, email, password, role = "user" } = req.body;
  const isUser = await userModel.findOne({
    $or: [{ username }, { email }],
  });
  if (isUser) {
    return res.status(409).json({ message: "user is allresdy exists" });
  }
  const hash = await bcrypt.hash(password, 10);
  const user = await userModel.create({
    username,
    email,
    password: hash,
    role,
  });
  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_TOKEN,
  );
  res.cookie("tolen", token);
  res.status(201).json({
    message: "user register successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    },
  });
};

export const login = async (req, res) => {
  const { username, email, password } = req.body;
};
