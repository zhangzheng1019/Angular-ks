"use strict";
angular.module('myApp').factory('myService', [function() {
    return {
        getUser: function() {
            return userInfo;
        },
        getCurrentUser: function() {
            return currentUser;
        },
        getTab: function() {
            return tabs;
        }
    }
}]);
