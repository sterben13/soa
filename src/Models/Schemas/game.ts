/// <reference path="../../../typings/index.d.ts" />
import * as mongoose from 'mongoose';

/**
 * Mediante un objeto Json declaramos las propiedades de los documentos en mongo
 */
let gameJson:Object = {
    title:{type:String, require:true},
    imagen:String,
    desarrolladores:Array,
    plataformas:Array,
    genero:String,
    modo:String,
    clasificacion:Array,
    requisitos:String,
    formatos:Array,
    resume:String
};

export let gameSchema:mongoose.Schema = new mongoose.Schema(gameJson);

let userJson:Object = {
    nombre:String,
    apellidos:String,
    telefono:String,
    direccion:String,
    foto:String,
    email:String,
    password:String
};

export let userSchema:mongoose.Schema = new mongoose.Schema(userJson);

let prestamoJson:Object = {
    idCopia:String,
    idUser:String,
    fecha_autorizacion:{type: Date, default: Date.now},
    fecha_retorno:{type: Date, default: Date.now}
};

export let prestamoSchema:mongoose.Schema = new mongoose.Schema(prestamoJson);

let copiaJson:Object = {
    idGame:String,
    estado: { type: String, enum: ["ok", "dañado", "perdido", "irreparable"]},
    disponibilidad:Boolean
};

export let copiaSchema:mongoose.Schema = new mongoose.Schema(copiaJson);