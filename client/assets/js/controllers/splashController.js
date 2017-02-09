'use strict';

(function(){
    angular.module('cuzMain').controller('splashController', splashController);

    function splashController($scope, $location, subscriptionFactory){
        $scope.counter = [Math.floor(Math.random()*3), Math.floor(Math.random()*9+1)];
        // $scope.counter = [0,1];
        $scope.view = 0;
        $scope.buttonText = 'click here';

        var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

        $scope.subscribeEmail = "";
        $scope.subscribeMessage = "subscribe for the latest news from cuz";

        $scope.clicker = function(){
            console.log($scope.counter);
            if (!$scope.counter[0] && $scope.counter[1] === 1) {
                $scope.counter[1]--;
                $scope.view++;
                console.log($scope.view);
                $scope.buttonText = 'click bait';
            } else if ($scope.counter[1] === 0) {
                $scope.counter[0]--;
                $scope.counter[1] = 9;
            } else {
                $scope.counter[1]--;
            }
        }

        $scope.subscribe = function(){
            $scope.subscribeMessage = 'subscribe for the latest news from cuz';

            if ($scope.subscribeEmail === "") {
                $scope.subscribeMessage = "you've gotta enter an email!";
            } else if (!emailRegex.test($scope.subscribeEmail)) {
                $scope.subscribeMessage = "enter a valid email!";
            } else {
                subscriptionFactory.emailSubscribe({email : $scope.subscribeEmail}, function(data){
                    console.log(data);
                    if (data.errors === "Member Exists") {
                        $scope.subscribeMessage = "thanks, but you're already sing up! check your email for confirmation!";
                        $scope.subscribeEmail = '';
                    } else {
                        $scope.subscribeMessage = 'you should be receiving an email confirmation, thanks for signing up!'
                        $scope.subscribeEmail = '';
                    }
                });
            }
        }

    };
})();