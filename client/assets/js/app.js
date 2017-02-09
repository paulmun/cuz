'use strict';

(function(){

    angular.module('cuzMain', ['ngRoute']).config(config);

    function config($routeProvider, $locationProvider){
        $locationProvider.hashPrefix('');

        $routeProvider
        .when('/', {
            templateUrl: 'partials/index.html',
            controller: 'splashController'
        })
        .when('/contact', {
            templateUrl: 'partials/contact.html',
            controller: 'contactController'
        })
        .otherwise('/');
    }

})();