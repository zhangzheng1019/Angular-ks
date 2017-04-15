"use strict";
angular.module("myApp", ['ui.router']);

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

"use strict";
var currentUser = {
    'id': 0,
    'name': '张政',
    'thumb': 'images/a3.jpg',
    'describe': 'Lorem0 ipsum dolor sit amet',
    'province': '河北',
    'city': '石家庄',
    'star': 20,
    'fansnum': 200,
    'job': "设计师，博客"
};
var userInfo = [{
    'id': 1,
    'admireid': 0,
    'name': '小王',
    'thumb': 'images/a1.jpg',
    'describe': 'Lorem1 ipsum dolor sit amet',
    'province': '河北',
    'city': '石家庄',
    'star': 14,
    'fansnum': 20,
    'job': "设计师，博客"
}, {
    'id': 2,
    'admireid': 0,
    'name': '张琳',
    'thumb': 'images/a2.jpg',
    'describe': 'Lorem2 ipsum dolor sit amet',
    'province': '河北',
    'city': '石家庄',
    'star': 3,
    'fansnum': 100,
    'job': "作家，杂志编辑"
}, {
    'id': 3,
    'admireid': 0,
    'name': '李小明',
    'thumb': 'images/a3.jpg',
    'describe': 'Lorem3 ipsum dolor sit amet',
    'province': '河北',
    'city': '石家庄',
    'star': 6,
    'fansnum': 10,
    'job': "艺术总监，电影剪辑"
}, {
    'id': 4,
    'admireid': 0,
    'name': '赵大城',
    'thumb': 'images/a4.jpg',
    'describe': 'Lorem4 ipsum dolor sit amet',
    'province': '河北',
    'city': '石家庄',
    'star': 20,
    'fansnum': 200,
    'job': "音乐家，运动员"
}]

"use strict";
angular.module('myApp')
    .directive('appHead', [function() {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                data: '='
            },
            templateUrl: 'view/template/head.html'
        }
    }])
    .directive('appMenu', [function() {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                isShow: '=',
                data: '='
            },
            templateUrl: 'view/template/menu.html',
            link: function(sco, ele, attr) {
                sco.show = function() {
                    sco.isShow = !sco.isShow;
                };
            }
        }
    }])
    .directive('appInfo', [function() {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                data: '='
            },
            templateUrl: 'view/template/info.html',
            link: function(sco, ele, attr) {
                sco.supportMes = "支持他！";
                sco.supportClick = false;
                sco.followClick = false;
                sco.followMes = "关注";
                sco.support = function() {
                    sco.supportClick ? sco.data.star-- : sco.data.star++;
                    sco.supportClick = !sco.supportClick;
                    sco.supportMes = sco.supportMes == "取消点赞" ? "支持他！" : "取消点赞";
                }
                sco.follow = function() {
                    sco.followClick ? sco.data.fansnum-- : sco.data.fansnum++;
                    sco.followClick = !sco.followClick;
                    sco.followMes = sco.followMes == "取消关注" ? "关注" : "取消关注";
                }
            }
        }
    }])
    .directive('appFans', [function() {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                fanslist: '='
            },
            templateUrl: 'view/template/fans.html'
        }
    }])
    .directive('appNew', [function() {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'view/template/new.html'
        }
    }])
    .directive('appFoot', [function() {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'view/template/foot.html'
        }
    }])
    .directive('appTab', [function() {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'view/template/tab.html'
        }
    }])

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
