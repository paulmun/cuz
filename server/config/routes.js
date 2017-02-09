'use strict';

(function(){

    var subscribeController = require('../controllers/subscribes.js');

    module.exports = function(app){

        app.post('/subscribe', function(req, res){
            console.log(req.body)
            subscribeController.add(req,res);
        });
        
    }

})();