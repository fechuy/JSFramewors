'use strict'

//cargar modulos de node para crerar el servidor

var express = require('express');
var bodyParser = require('body-parser');

//ejecutar express

var app = express()

//cargar ficheros rutas

var articleRoutes = require('./routes/article')

//middlewares

app.use(bodyParser.urlencoded({exntended:false}));
app.use(bodyParser.json());

//CORS

//Añadir prefijos a rutas / cargar rutas

app.use('/api/', articleRoutes);

/*app.get('/test', (req, res) => {
    console.log("Hola mundo")
    return res.status(200).send({
        curso: "Frameworks JS",
        autor: "Felipe Santana",
        url: "techsupp.ddns.net"
    });
});*/

//exportar modulo

module.exports = app;