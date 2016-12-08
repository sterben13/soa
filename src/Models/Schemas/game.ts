/// <reference path="../../../typings/index.d.ts" />
import * as mongoose from 'mongoose';
var textSearch = require('mongoose-text-search');

/**
 * Mediante un objeto Json declaramos las propiedades de los documentos en mongo
 */
let gameJson:Object = {
    title:{type:String, require:true},
    imagen:String,
    desarrollador:Array,
    plataformas:Array,
    genero:String,
    modo:String,
    clasificacion:Array,
    requisitos:String,
    formatos:Array,
    resumen:String
};

export let gameSchema:mongoose.Schema = new mongoose.Schema(gameJson).plugin(textSearch).index({ idGame: 'text' });;

let userJson:Object = {
    nombre:String,
    apellidos:String,
    telefono:String,
    direccion:String,
    foto:String,
    email:String,
    password:String
};
gameSchema
 
export let userSchema:mongoose.Schema = new mongoose.Schema(userJson);

let prestamoJson:Object = {
    idCopia:String,
    idUser:String,
    fecha_autorizacion:{type: Date, default: Date.now},
    fecha_retorno:{type: Date, default: Date.now}
};

export let prestamoSchema:mongoose.Schema = new mongoose.Schema(prestamoJson);

let copiaJson:Object = {
    title:String,
    idGame:String,
    estado: { type: String, enum: ["ok", "dañado", "perdido", "irreparable"] },
    disponibilidad:Boolean
};

export let copiaSchema:mongoose.Schema = new mongoose.Schema(copiaJson).index({idGame:'text'});;