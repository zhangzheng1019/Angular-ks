"use strict";
angular.module('myApp').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('new', {
        url: '/new',
        templateUrl: 'view/new.html',
        controller: 'newCtrl'
    }).state('intro', {
        url: '/intro',
        templateUrl: 'view/intro.html',
        controller: 'introCtrl'
    }).state('message', {
        url: '/message',
        templateUrl: 'view/message.html',
        controller: 'messageCtrl'
    });
    $urlRouterProvider.otherwise('new');
}]);
