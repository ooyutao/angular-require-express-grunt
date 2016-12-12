/*! web 2016-12-12 */
define(["config/appregister"],function(app){app.controller("homeCtrl",function($scope){$scope.clickUrl=function(url){window.location.href="#/"+url}})});