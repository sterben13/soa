/// <reference path="../../../typings/index.d.ts" />
var servidor:string = 'localhost';
if (process.platform == 'win32') {
    servidor = '127.0.0.1:27017';
}

import * as mongoose from 'mongoose';
export class Crud {
    public model: mongoose.Model<mongoose.Document>;
   
//Cambiar la direccion en process
    constructor(model: string, schema: mongoose.Schema) {
        mongoose.Promise = global.Promise;
        this.connection('mongodb://'+servidor+'/test');
        this.model = mongoose.model(model, schema);
    }

    connection(uri: string) {
        mongoose.connect(uri)
            .then(() => {
                console.log('Conexion exitosa');
            })
            .catch((err: Error) => {
                console.log(err.message);
            });
    }

    close() {
        mongoose.disconnect()
            .then(() => {
                console.log('Conexion cerrada')
            })
            .catch((err: Error) => {
                console.log(err.message);
            });
    }

    insert(doc: Object) {
        return new Promise((resolve, reject) => {
            new this.model(doc).save()
                .then((doc: mongoose.Document) => {
                    resolve(doc);
                })
                .catch((err: Error) => {
                    reject(err.message);
                });
        })
    }

    findById(id: String) {
        return new Promise((resolve, reject) => {
            this.model.findById(id)
                .then((doc: mongoose.Document) => {
                    resolve(doc);
                }).catch((err: Error) => {
                    reject(err.message);
                });
        })
    }

    findAll() {
        return new Promise((resolve, reject) => {
            this.model.find()
                .then((doc) => {
                    resolve(doc);
                })
                .catch((err: Error) => {
                    reject(err.message)
                })
        });
    }

    delete(id: string) {
        return new Promise((resolve, reject) => {
            this.model.remove({ _id: id })
                .then(() => {
                    resolve();
                })
                .catch((err: Error) => {
                    reject(err.message);
                });
        });
    }

    update(id, doc) {
        return new Promise((resolve, reject) => {
            this.model.update({ _id: id }, doc)
                .then((doc) => {
                    resolve(doc);
                }).catch((err: Error) => {
                    reject(err.message)
                });
        });
    }
}