const express = require("express");
const {
  createMusic,
  createAlbum,
  getAllMusics,
  getAllAlbums,
  getAlbumsbyId,
} = require("../controllers/music.controller");
const multer = require("multer");
const { authArtist, authUser } = require("../middlewares/authmiddleware");

const upload = multer({
  storage: multer.memoryStorage(),
});

const router = express.Router();

router.post("/upload", authArtist, upload.single("music"), createMusic);
router.post("/album", authArtist, createAlbum);
router.get("/", authUser, getAllMusics);
router.get("/albums", authUser, getAllAlbums);
router.get("/albums/:albumId", authUser, getAlbumsbyId);

module.exports = router;
