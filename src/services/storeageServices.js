import imageKit from "@imagekit/nodejs";
import dotenv from "dotenv"
dotenv.config()

const imageKitClinet = new imageKit({
  privateKey: process.env.IMAGEKIT_PRAVIT_KEY,
});
async function uplodaFile(buffer) {
  const result = await imageKitClinet.files.update({
    file: buffer.toString("bade64"),
    fileName: "music_" + Data.now(),
    folder: "music",
  });
  return result;
}

export default uplodaFile;
