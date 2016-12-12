/**
 * Created by Administrator on 2016/8/12.
 */
define(['config/appregister', "services/httpServices"], function (app) {

    app.controller("contCtrl", function ($scope, getCtrl,$location) {

        getCtrl.getData({// ‰»Î
            type: "GET",
            url: "/booksId/" + $location.search().id
        }).success(function (res) {// ‰≥ˆ
            console.log(res);
            if(res.error_code == 0){
                $scope.data = res.result[0];
            }else{
                alert(res.reason);
            }

        }).error(function () {//Õ¯¬Á±®¥Ì
            alert("Õ¯¬Á«Î«Û ß∞‹£°");
        })

    });

});

