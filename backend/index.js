'use strict'

var mongoose = require('mongoose');

var app = require('./app');
var port = 3900;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/api_rest_blog', {useNewUrlParser : true, useUnifiedTopology: true}).then(() => {
    console.log('La conexion a la base de datos se ha realizado con exito :D');
    //crear el servidory el lisent http
    app.listen(port, () => {
        console.log('Sevidor corriendo en http://localhost:'+port);
    });

});
