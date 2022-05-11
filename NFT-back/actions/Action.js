var db = require('../db');

var Action = {
    //Methode de récupération de tout les produits
    getlikes: function(callback)
    {
        return db.query('SELECT * FROM oeuvre_like', callback);
    }
}

module.exports = Action;