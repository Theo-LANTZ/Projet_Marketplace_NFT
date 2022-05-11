var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
var Oeuvre = require('./Oeuvres');
const res = require('express/lib/response');
var db = require('../db');

//Route vers la méthode qui permet la récupération des oeuvres
router.get('/', function(req, res){
    Oeuvre.getoeuvres(function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.get('/parUser', function(req, res){
    let sql = `SELECT users.username
    FROM users, oeuvre
    WHERE users.id = oeuvre.id_user`;
    let query = db.query(sql, (err,rows) => {
        if(err){
            res.status(400).json(err);
        }else{
            res.json(rows);
        }
    });
});

router.get('/:id', function(req, res) {
    let sql = `SELECT * FROM oeuvre WHERE id_user = "${req.params.id}"`;
    let query = db.query(sql, (err, rows) => {
        if(err){
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

module.exports = router;