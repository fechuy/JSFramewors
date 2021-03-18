'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articheSchema = Schema ({
    titulo: String,
    contenido: String,
    fecha: {type: Date, default: Date.now},
    imagen: String
});

module.exports = mongoose.model('Articulo', articheSchema);
//crea una coleccion que se llama articulos -> guarda documentos de este tipo y con esta esrtuctura