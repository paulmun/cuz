'use strict';

(function(){

    var mongoose = require('mongoose'),
        Schema = mongoose.Schema;

    var SubscribeSchema = new Schema({
        value: {
            type: String,
            required: true,
            trim: true
        }
    });

    mongoose.model('Subscribe', SubscribeSchema);
    
})();