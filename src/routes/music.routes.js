const express = require("express");
const { createMusic, createAlbum } = require("../controllers/music.controller");
const multer = require("multer");
const { authArtist } = require("../middlewares/authmiddleware");

const upload = multer({
  storage: multer.memoryStorage(),
});

const router = express.Router();

router.post("/upload", authArtist, upload.single("music"), createMusic);
router.post("/album", authArtist,  createAlbum);

module.exports = router;
