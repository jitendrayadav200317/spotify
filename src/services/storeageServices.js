import ImageKit from "@imagekit/nodejs";
import dotenv from "dotenv";
dotenv.config();

const imageKitClient = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRAVIT_KEY,
});
async function uploadFile(buffer) {
  const result = await imageKitClient.files.upload({
    file: buffer.toString("base64"),
    fileName: "music_" + Date.now(),
    folder: "music",
  });
  return result;
}

export default uploadFile;
