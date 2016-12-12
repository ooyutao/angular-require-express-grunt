define(['config/appregister'],function(app){
	app.controller('homeCtrl', function($scope){
        $scope.clickUrl = function(url){
            window.location.href = "#/"+url;
        }


	})
})