import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect(process.env.DB);
    console.log("db connect");
  } catch (error) {
    console.log("db connect error ", error);
  }
}

export default connectDB;
