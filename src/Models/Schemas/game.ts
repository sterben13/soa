/// <reference path="../../../typings/index.d.ts" />
import * as mongoose from 'mongoose';
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