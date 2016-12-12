/**
 * Created by Administrator on 2016/8/12.
 */
define(['config/appregister', "services/httpServices"], function (app) {

    app.controller("contCtrl", function ($scope, getCtrl,$location) {

        getCtrl.getData({//输入
            type: "GET",
            url: "/booksId/" + $location.search().id
        }).success(function (res) {//输出
            console.log(res);
            if(res.error_code == 0){
                $scope.data = res.result[0];
            }else{
                alert(res.reason);
            }

        }).error(function () {//网络报错
            alert("网络请求失败！");
        })


    });

});

