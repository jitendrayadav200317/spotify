import express from "express";
import multer, { memoryStorage } from "multer";
import { authArtist, authUser } from "../middlewares/authMiddlewares.js";
import {
  createMusic,
  createAlbum,
  getAllMusic,
  getAllAlbums,
} from "../controllers/musicControllers.js";

const uplode = multer({
  storage: multer.memoryStorage(),
});

const router = express.Router();
router.post("/upload", authArtist, uplode.single("music"), createMusic);
router.post("/album", authArtist, createAlbum);
router.get("/", authUser, getAllMusic);
router.get("/albums", authUser, getAllAlbums);
export default router;
