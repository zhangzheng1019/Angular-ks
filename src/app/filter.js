"use strict";
angular.module('myApp').filter('fanList', [function() {
    return function(data, count) {
        if (angular.isArray(data) && angular.isNumber(count)) {
            if (count > data.length || count < 1) {
                return data;
            } else {
                return data.slice(count);
            }
        } else {
            return data;
        }
    }
}])
