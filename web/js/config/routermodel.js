/**
 * Created by Administrator on 2016/8/13.
 */
define([], function () {
    /*
     * 定义angularJS 初始化之前配置好的路由
     * */
    var ret = [
        {
            state: "home",
            url: "view/list/home.html",
            ctrl: "controllers/list/homeCtrl"
        },
        {
            state: "showData",
            url: "view/list/showData.html",
            ctrl: "controllers/list/showDataCtrl"
        },
        {
            state: "cont",
            url: "view/list/cont.html",
            ctrl: "controllers/list/contCtrl"
        }


    ];
    return ret;
})