var db = require('../db');

var Oeuvre = {
    getoeuvres: function(callback){
        return db.query('SELECT * FROM oeuvre', callback);
    }
}

module.exports = Oeuvre;