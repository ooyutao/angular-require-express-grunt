/*! web 2016-12-12 */
define(["config/routermodel","angular","router"],function(routermodel){var app=angular.module("myModule",["ui.router"]);return app.config(function($controllerProvider,$compileProvider,$filterProvider,$provide,$stateProvider){app.register={controller:$controllerProvider.register,directive:$compileProvider.directive,filter:$filterProvider.register,service:$provide.service,factory:$provide.factory,stateProvider:$stateProvider}}).config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){function routerSet(){var item=model[index];if(angular.isString(item.state)&&angular.isString(item.url)&&angular.isString(item.url)){var strurl=item.ctrl,ctrlName=strurl.substring(strurl.lastIndexOf("/")+1);$stateProvider.state(item.state,{url:"/"+item.state,controller:ctrlName,templateUrl:item.url,resolve:{loadCtrl:["$q",function($q){var deferred=$q.defer();return require([item.ctrl],function(){deferred.resolve()}),deferred.promise}]}}),index++,index<model.length&&arguments.callee()}}$urlRouterProvider.otherwise("home");var model=routermodel,index=0;routerSet()}]),app});