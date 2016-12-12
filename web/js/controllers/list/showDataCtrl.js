/**
 * Created by Administrator on 2016/8/12.
 */
define(['config/appregister', "services/httpServices","my97"], function (app) {

    app.controller("showDataCtrl", function ($scope, $http, getCtrl) {
        $scope.urlData = "";

        $scope.sousuo = function(){
            if($scope.urlData == ""){
                alert("选择日期!");
                return false;
            }
            getCtrl.getData({//输入
                type: "GET",
                url: "/booksService/" + $scope.urlData
            }).success(function (res) {//输出
                console.log(res);
                if(res.error_code == 0){
                    $scope.data = res.result;
                }else{
                    alert(res.reason);
                }
            }).error(function () {//网络报错
                alert("网络请求失败！");
            })

        }

    });

});

