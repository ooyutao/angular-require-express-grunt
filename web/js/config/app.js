define(["config/routermodel", 'angular', 'router'], function (routermodel) {
    var app = angular.module("myModule", ['ui.router']);
    app.config(function ($controllerProvider, $compileProvider, $filterProvider, $provide, $stateProvider) {
        app.register = {
            //得到$controllerProvider的引用
            controller: $controllerProvider.register,
            //同样的，这里也可以保存directive／filter／service的引用
            directive: $compileProvider.directive,
            filter: $filterProvider.register,
            service: $provide.service,
            factory: $provide.factory,
            stateProvider: $stateProvider
        };
    }).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('home');
        var model = routermodel;
        var index = 0;
        function routerSet(){
            //循环调用 实现将model中所有设置好的对象 通过 $stateProvide.state（）一一配置
            var item = model[index];
            if (!angular.isString(item.state) || !angular.isString(item.url) || !angular.isString(item.url)) {
                return
            }
            var strurl = item.ctrl;
            var ctrlName = strurl.substring(strurl.lastIndexOf('/')+1);

            $stateProvider.state(item.state, {
                url:"/"+ item.state,
                controller: ctrlName,
                templateUrl: item.url,
                resolve: {
                    loadCtrl: ["$q", function($q) {
                        var deferred = $q.defer();
                        //异步加载controller／directive/filter/service
                        require([
                            item.ctrl
                        ], function() { deferred.resolve(); });
                        return deferred.promise;
                    }]
                }
            })
            index++;
            if(index <model.length){
                arguments.callee ();
            }
        }
        routerSet();
    }]).config(function($httpProvider) {
        //监听AJAX请求，添加loading效果
        $httpProvider.interceptors.push(['$q', '$rootScope', function ($q, $rootScope) {
            return {
                'request': function (config) {
                    $rootScope.loading = true;
                    return $q.resolve(config);
                },
                'response': function (response) {
                    $rootScope.loading = false;
                    return $q.resolve(response);
                },
                'requestError': function (rejection) {
                    $rootScope.loading = false;
                    return $q.reject(rejection);
                },
                'responseError': function (rejection) {
                    $rootScope.loading = false;
                    return $q.reject(rejection);
                }
            }
        }]);
    });

    return app;
})