define(['config/appregister', "services/httpServices"],function(app){
	app.controller('homeCtrl', function($scope,getProducts){
        $scope.clickUrl = function(url){
            window.location.href = "#/"+url;
        }
        //$scope.login = function(){
        //    window.location.href="https://sso.jcloud.com/sso/login?ReturnUrl="+window.location.protocol+"//"+window.location.host;
        //}
        //$scope.exit = function(){
        //    getProducts.getData({type: "GET",url:"//sso.jd.com/exit?t="+new Date()+"&callback=?"}).success(function () {
        //    });
        //    getProducts.getData({type: "GET",url:"//sso.jcloud.com/exit?t="+new Date()+"&callback=?"}).success(function () {
        //    });
        //    setTimeout(function () {
        //        window.location.href="https://sso.jcloud.com/sso/login?ReturnUrl="+window.location.protocol+"//"+window.location.host;
        //    }, 500);
        //}

        //var requestion = {
        //    type: "GET",
        //    url: "/authentication/getLoginInfo"
        //};
        //getProducts.getData(requestion).success(function (data) {
        //    console.log(data);
        //    $scope.data = data.result;
        //}).error(function () {
        //    console.log("bad Requestion")
        //})

	})
})