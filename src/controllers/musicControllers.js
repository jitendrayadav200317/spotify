import musicModel from "../models/musicModel.js";
import uplodaFile from "../services/storeageServices.js";
import jwt from "jsonwebtoken";

export const createModel = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.this.status(401).json({ message: "unauthorized token" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "artist") {
      return res
        .status(403)
        .json({ message: "you don't have access to create an music" });
    }

    const { title } = req.body;
    const file = req.body;

    const result = await uplodaFile(req.file.buffer);

    const music = await musicModel.create({
      uri: result.url,
      title,
      artist: decoded.id,
    });
    return res.status(201).json({
      message: "music create successfully",
      music: {
        id: music._id,
        uri: music.uri,
        title: music.title,
        artist: music.artist,
      },
    });
  } catch (error) {
    console.log(error);

    return res.status(401).json({ message: "unauthorized user" });
  }
};
