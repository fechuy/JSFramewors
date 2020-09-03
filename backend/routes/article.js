'use strict'

var express = require('express');
var articleController = require('../controllers/article');

var router = express.Router();

router.post('/DatosCurso', articleController.datosCurso);
router.get('/test', articleController.test);

//rutas utiles
router.post('/save', articleController.save);

module.exports = router;