import express from "express";
import multer, { memoryStorage } from "multer";
import { createModel } from "../controllers/musicControllers.js";

const uplode = multer({
  storage: multer.memoryStorage(),
});

const router = express.Router();
router.post("/uplode", uplode.single("music"), createModel);

export default router;
