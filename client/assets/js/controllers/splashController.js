(function(){
    angular.module('cuzMain').controller('splashController', splashController);

    function splashController($scope, $location){
        $scope.counter = [Math.floor(Math.random()*3), Math.floor(Math.random()*9+1)];
        // $scope.counter = [0,1];
        $scope.view = 0;
        $scope.buttonText = 'click here';

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

    };
})();