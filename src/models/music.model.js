const mongoose = require("mongoose");

const musicModel = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  uri: {
    type: String,
    required: true,
  },
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const musicModel = mongoose.model("music", musicModel);

module.exports=musicModel;
