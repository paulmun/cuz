'use strict';

(function(){
    var https = require('https'),
        mongoose = require('mongoose'),
        Subscribe = mongoose.model('Subscribe'),
        request = require('request');

    function subscribeController(){
        
        this.add = function(req, res){
            var email = req.body.email;

            console.log(email, req.body);

            Subscribe.find().exec(function(err, key){
                if(err)res.json(err);

                var options = {
                    url: 'https://us14.api.mailchimp.com/3.0/lists/0611334468/members',
                    method: 'POST',
                    json: {
                        'email_address': email,
                        'status': 'pending'
                    },
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'apikey ' + key[0].value
                    }
                };
                
                var callback = function(err, response, body){
                    var str = '';

                    console.log(err, body)

                    if (body.title) {
                        res.json({errors: body.title})
                    } else {
                        res.json({email: body.email_address})
                    }
                    
                }

                request(options, callback);

            });

        }
    }
    
    module.exports = new subscribeController();

})();