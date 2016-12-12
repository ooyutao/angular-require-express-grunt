/**
 * Created by Administrator on 2016/8/12.
 */
define(['config/appregister', "services/httpServices","my97"], function (app) {

    app.controller("showDataCtrl", function ($scope, $http, getProducts) {
        $scope.urlData = "";

        $scope.sousuo = function(){
            if($scope.urlData == ""){
                alert("Ñ¡ÔñÈÕÆÚ!");
                return false;
            }
            var requestion = {
                type: "GET",
                url: "/booksService/" + $scope.urlData
            };
            getProducts.getData(requestion).success(function (data) {
                console.log(data);
                $scope.data = data.result;
            }).error(function () {
                console.log("bad Requestion")
            })
        }

    });

});

