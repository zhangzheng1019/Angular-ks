"use strict";
angular.module('myApp').factory('fansService', [function() {
    return {
        getUser: function() {
            return userInfo;
        },
        getCurrentUser: function() {
            return currentUser;
        }
    }
}]);
