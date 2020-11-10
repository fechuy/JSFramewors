'use strict'

var validator = require('validator');
var Article = require('../models/article');

var controller = {
    datosCurso: (req, res) => {
        var hola = req.body.hola;
        return res.status(200).send({
            curso: "Frameworks JS",
            autor: "Felipe Santana",
            url: "techsupp.ddns.net"
        });
    },

    test: (req, res) => {
        return res.status(200).send({
            message:'Soy la accion test del controlador de artriculos'
        });
    },

    save: (req, res) => {
        //recoger parametros por post
        var params = req.body;
        //validar datos
        try {
            var validateTitle = !validator.isEmpty(params.titulo);
            var validateContent = !validator.isEmpty(params.contenido);
        } catch (error) {
            return res.status(200).send({
                message:'Faltan datos por enviar.'
            }); 
        }

        if (validateTitle && validateContent) {
            //crear el obj a guardar
            var article = new Article();
            //asignar valores
            article.titulo = params.titulo;
            article.contenido = params.contenido;
            article.imagen = null;

            //guardar el articulo
            article.save((error, articleStored) => {
                if (error || !articleStored) {
                    return res.status(404).send({
                        status: 'Error',
                        message:'El articulo no se ha guardado.'
                    }); 
                }
                //devolver una respuesta

                return res.status(200).send({
                    status: 'success',
                    articleStored
                });

            });            

        } else {
            return res.status(200).send({
                status: 'error',
                message:'Los datos no son validos.'
            });
        }
    },

    getArticles: (req, res) => {
        //find
        Article.find({}).sort('-_id').exec((err, articles) => {
            
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'error al devolver los articulos'
                });    
            }

            if(!articles){
                return res.status(404).send({
                    status: 'warning',
                    message: 'No hay articulos para mostrar'
                });    
            }
            
            return res.status(200).send({
                status: 'success',
                articles
            });
        })
        
    }
};
//end controller

module.exports = controller;