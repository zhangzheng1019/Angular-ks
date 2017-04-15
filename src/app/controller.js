"use strict";
angular.module('myApp')
    .controller('mainCtrl', ['$scope', 'fansService', function($scope, fansService) {
        $scope.fansData = fansService.getUser();
        $scope.currentUserData = fansService.getCurrentUser();

    }])
    .controller('newCtrl', ['$scope', function($scope) {


    }])
    .controller('introCtrl', ['$scope', 'fansService', function($scope, fansService) {

    }])
    .controller('messageCtrl', ['$scope', 'fansService', function($scope, fansService) {

    }])
