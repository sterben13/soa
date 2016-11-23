"use strict";
const mongoose = require('mongoose');
let gameJson = {
    title: { type: String, require: true },
    imagen: String,
    desarrolladores: Array,
    plataformas: Array,
    genero: String,
    modo: String,
    clasificacion: Array,
    requisitos: String,
    formatos: Array,
    resume: String
};
exports.gameSchema = new mongoose.Schema(gameJson);
