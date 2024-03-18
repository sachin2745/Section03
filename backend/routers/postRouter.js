const express = require('express');
const router = express.Router();
const Model = require('../models/postModel');

router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save() //save date in mongoDB
    .then((result) => {
        res.status(200).json(result);  //200 status means successfull
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err); //500 status means server side error 
    });
   
});
//request accept and show all data
router.get('/getall', (req, res) => {
    
    Model.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;