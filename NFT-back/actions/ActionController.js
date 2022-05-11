var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
var Action = require('./Action');
var db = require('../db');

router.get('/likes/:id', function(req, res) {
    let sql = `SELECT * FROM oeuvre_like WHERE id_oeuvre = "${req.params.id}"`;
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