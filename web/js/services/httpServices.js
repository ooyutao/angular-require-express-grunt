/**
 * Created by Administrator on 2016/8/12.
 */
define(['config/appregister'],function(app){
    app.factory("getCtrl",function($http){
        var baseUrl = "/service";
        return {
            getData : function(requestion) {
                return  $http({
                    method: requestion.type,
                    url:baseUrl+ requestion.url
                })
            }
        }
    })
})
