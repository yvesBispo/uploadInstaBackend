const express=require('express');

const multer = require('multer')
const uploadConfig = require('./config/upload')
const PostController =require('./controllers/Postcontroller')
const LikeController = require('./controllers/LikeControler')

const upload=multer(uploadConfig);
const routes = new express.Router();
 
routes.get('/posts',PostController.index)
routes.post('/posts',upload.single('image'),PostController.store)

routes.post('/posts/:id/like',LikeController.store)

module.exports =routes;