const albumModel = require("../models/album.model");
const musicModel = require("../models/music.model");
const { uploadFile } = require("../services/storage.services");
const jwt = require("jsonwebtoken");

async function createMusic(req, res) {
    const { title } = req.body;
    const file = req.file;
    const result = await uploadFile(file.buffer.toString("base64"));
    const music = await musicModel.create({
      uri: result.uri,
      title,
      artist: decoded.id,
    });
    res.status(201).json({
      message: "Music created successfully",
      music: {
        id: music._id,
        uri: music.uri,
        title: music.title,
        artist: music.artist,
      },
    });
}

async function createAlbum(req, res) {
    const { title, musics } = req.body;
    const album = await albumModel.create({
      title,
      artist: decoded.id,
      music: musics,
    });
    res.status(201).json({
      message: "Album created successfully",
      album: {
        id: album._id,
        title: album.title,
        artist: album.aritst,
        musics: album.musics,
      },
    });
}
module.exports = { createMusic, createAlbum };
