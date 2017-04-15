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
                    sco.followMes = sco.followMes == "已关注" ? "关注" : "已关注";
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
            scope: {
                data: '='
            },
            templateUrl: 'view/template/tab.html'
        }
    }])
    .directive('appReply', ['$compile', function($compile) {
        return {
            restrict: 'A',
            repalce: true,
            scope: {
                data: '='
            },
            templateUrl: 'view/template/reply.html',
            link: function(sco, ele, attr) {
                sco.submitReplyMes = function(mes) {
                    sco.thumb = sco.data.thumb;
                    console.log(sco.thumb)
                    sco.name = sco.data.name;
                    console.log(sco.name)
                    if (mes != undefined) {
                        sco.o_comment = angular.element($('.comment'));
                        sco.o_content = '<div class="m-l-lg"><a class="pull-left thumb-sm avatar"><img ng-src="{{' + sco.thumb + '}}" alt="..."></a><div class="m-l-xxl panel b-a"><div class="panel-heading pos-rlt"><span class="arrow left pull-up"></span><span class="text-muted m-l-sm pull-right"> 10 m ago </span> <a href="" ng-bind="' + sco.name + '"></a><span>' + mes + '</span></div> </div> </div>';
                        $compile(sco.o_content)(sco);
                        sco.o_comment.append(sco.o_content);
                    } else {
                        alert('评论内容为空');
                    }
                }
            }
        }
    }])
