/**
 * Created by Administrator on 2016/8/12.
 */
define(['config/appregister', "services/httpServices"], function (app) {

    app.controller("contCtrl", function ($scope, getProducts,$location) {
        $scope.urlData = $location.search();
        var requestion = {
            type: "GET",
            url: "/booksId/" + $scope.urlData.id
        };
        getProducts.getData(requestion).success(function (data) {
            console.log(data);
            $scope.data = data.result[0];
        }).error(function () {
            console.log("bad Requestion")
        })

    });

});

