import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  music: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "music",
    },
  ],
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    reg: "user",
    required: true,
  },
});

const albumModel = mongoose.model("album", albumSchema);

export default albumModel;
