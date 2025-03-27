// models/nosql/tracks.js
const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const TracksSchema = new mongoose.Schema(
  {
    name: String,
    album: String,
    cover: String,
    artist: {
      name: String,
      nickname: String,
      nationality: String,
    },
    duration: {
      start: Number,
      end: Number,
    },
    mediaId: {
      type: mongoose.Types.ObjectId,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

TracksSchema.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("tracks", TracksSchema);
