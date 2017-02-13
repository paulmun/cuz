'use strict';

(function(){
    angular.module('cuzMain').controller('contactController', contactController);

    function contactController($scope, $location){

        var serviceList = ['branding', 'digital experiences', 'social media', 'brand & product content', 'something else'];
        $scope.services = '';
        $scope.selectedServices = [false, false, false, false, false];

        $scope.serviceClass = ['unselectedService', 'unselectedService', 'unselectedService', 'unselectedService', 'unselectedService'];

        $scope.modal = false;

        $scope.writeServices = function() {
            var temp = [];

            for (var i = 0; i < 5; i++) {
                if($scope.selectedServices[i]) {
                    temp.push(serviceList[i]);
                }
            }

            $scope.services = temp.join(', ');

            $scope.modal = false;
        }

        $scope.serviceClick = function(index) {
            $scope.selectedServices[index] = !$scope.selectedServices[index];

            if ($scope.selectedServices[index]) {
                $scope.serviceClass[index] = 'selectedService';
            } else {
                $scope.serviceClass[index] = 'unselectedService';
            }
        }

    };
})();