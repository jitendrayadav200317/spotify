import musicModel from "../models/musicModel.js";
import uplodaFile from "../services/storeageServices.js";
import albumModel from "../models/albumModel.js";
import jwt from "jsonwebtoken";

export const createMusic = async (req, res) => {
  const { title } = req.body;
  const file = req.body;
  const result = await uplodaFile(req.file.buffer);
  const music = await musicModel.create({
    uri: result.url,
    title,
    artist: req.user.id,
  });
  return res.status(201).json({
    message: "music create successfully",
    music: {
      id: music._id,
      uri: music.uri,
      title: music.title,
      artist: req.user.id,
    },
  });
};

export const createAlbum = async (req, res) => {
  const { title, musics } = req.body;
  const album = await albumModel.create({
    title,
    artist: req.user.id,
    musics: musics,
  });
  res.status(201).json({
    message: "album create successfully",
    album: {
      id: {
        id: album._id,
        title: album.title,
        artist: album.artist,
        artist: req.user.id,
      },
    },
  });
};

export const getAllMusic = async (req, res) => {
  const music = await musicModel.find().populate("artist", "username email");
  res.status(200).json({
    message: "musics fetched successfully ",
    music: music,
  });
};
export const getAllAlbums = async (req, res) => {
  const album = await albumModel
    .find()
    .populate("artist", "username email")
    .populate("music");
  res.status(200).json({
    message: "albums fetched successfully",
    album: album,
  });
};
