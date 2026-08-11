import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: {
    typeo: String,
    required: true,
    unique: true,
  },
  email: {
    typeo: String,
    required: true,
    unique: true,
  },
  password: {
    typeo: String,
    requird: true,
  },
  role: {
    typeo: String,
    enum: ["user", "artist"],
  },
});

const userModel = mongoose.model("user", userSchema);

export default userModel;
