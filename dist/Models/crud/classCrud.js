"use strict";
const mongoose = require('mongoose');
class Crud {
    constructor(model, schema) {
        mongoose.Promise = global.Promise;
        this.connection('mongodb://localhost/test');
        this.model = mongoose.model(model, schema);
    }
    connection(uri) {
        mongoose.connect(uri)
            .then(() => {
            console.log('Conexion exitosa');
        })
            .catch((err) => {
            console.log(err.message);
        });
    }
    close() {
        mongoose.disconnect()
            .then(() => {
            console.log('Conexion cerrada');
        })
            .catch((err) => {
            console.log(err.message);
        });
    }
    insert(doc) {
        return new Promise((resolve, reject) => {
            new this.model(doc).save()
                .then((doc) => {
                resolve(doc);
            })
                .catch((err) => {
                reject(err.message);
            });
        });
    }
    findById(id) {
        return new Promise((resolve, reject) => {
            this.model.findById(id)
                .then((doc) => {
                resolve(doc);
            }).catch((err) => {
                reject(err.message);
            });
        });
    }
    findAll() {
        return new Promise((resolve, reject) => {
            this.model.find()
                .then((doc) => {
                resolve(doc);
            })
                .catch((err) => {
                reject(err.message);
            });
        });
    }
    delete(id) {
        return new Promise((resolve, reject) => {
            this.model.remove({ _id: id }, (err) => {
                if (err) {
                    reject(err.message);
                }
                else {
                    resolve();
                }
            });
        });
    }
    update(id, doc) {
        return new Promise((resolve, reject) => {
            this.model.update({ _id: id }, doc)
                .then((doc) => {
                resolve(doc);
            }).catch((err) => {
                reject(err.message);
            });
        });
    }
}
exports.Crud = Crud;
