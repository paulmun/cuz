(function(){

    angular.module('cuzMain', ['ngRoute']).config(config);

    function config($routeProvider, $locationProvider){
        $locationProvider.hashPrefix('');

        $routeProvider
        .when('/', {
            templateUrl: 'partials/index.html',
            controller: 'splashController'
        })
        .otherwise('/');
    }

})();