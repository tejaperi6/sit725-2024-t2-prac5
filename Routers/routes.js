const saveContact = require('../controllers/controllers')
const express = require('express')
const router = express.Router();
module.exports = (app)=>{
    router.post('/movies', saveContact);
    app.use(router);
}
