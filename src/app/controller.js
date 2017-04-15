"use strict";
angular.module('myApp')
    .controller('mainCtrl', ['$scope', 'myService', function($scope, myService) {
        $scope.fansData = myService.getUser();
        $scope.currentUserData = myService.getCurrentUser();
        $scope.tabs = myService.getTab();
    }])
    .controller('newCtrl', ['$scope', 'myService', function($scope, myService) {
        $scope.currentUserData = myService.getCurrentUser();
    }])
    .controller('introCtrl', ['$scope', function($scope) {

    }])
    .controller('messageCtrl', ['$scope', function($scope) {

    }])
