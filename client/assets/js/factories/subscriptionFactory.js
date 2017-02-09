'use strict';

(function(){

    angular.module('cuzMain').factory('subscriptionFactory', subscriptionFactory);

    function subscriptionFactory($http){
        function SubscriptionFactory(){

            this.emailSubscribe = function(email, callback){
                $http.post('/subscribe', email).then(function(returnData){

                    if(returnData.data.errors){
                        callback(returnData.data);
                    } else{
                        callback(returnData.data);
                    }
                });
            }

        }
        return new SubscriptionFactory();
    }
        
})();