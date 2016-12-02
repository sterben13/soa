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
let userJson = {
    nombre: String,
    apellidos: String,
    telefono: String,
    direccion: String,
    foto: String,
    email: String,
    password: String
};
exports.userSchema = new mongoose.Schema(userJson);
let prestamoJson = {
    idCopia: String,
    idUser: String,
    fecha_autorizacion: { type: Date, default: Date.now },
    fecha_retorno: { type: Date, default: Date.now }
};
exports.prestamoSchema = new mongoose.Schema(prestamoJson);
let copiaJson = {
    idGame: String,
    estado: { type: String, enum: ["ok", "dañado", "perdido", "irreparable"] },
    disponibilidad: Boolean
};
exports.copiaSchema = new mongoose.Schema(copiaJson);
