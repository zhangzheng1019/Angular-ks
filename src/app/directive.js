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
