const { Router } = require('express');

const multerCfg = require('./multer');
const multer = require('multer');

const upload = multer(multerCfg);

const controllers = require('./controllers');

const routes = Router();

routes.post('/upload', upload.single('file'), controllers.upload);

module.exports = routes;