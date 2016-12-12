require.config({
	baseUrl: 'app',
	paths: {
		'domReady':"lib/domReady",
		'jquery':"lib/jquery.min",
		'jqueryMedia':"lib/jquery.media",
		'app': 'config/app',
		'angular': 'lib/angular.min',
		'router': 'lib/angular-ui-router',
        'my97': 'lib/My97DatePicker/WdatePicker'
	},
	shim: {
		"jquery":{
			exports: 'jquery'
		},
		'angular': {
			exports: 'angular'
		},
        'my97':{
            exports: 'my97'
        },
		"jqueryMedia":{
			deps:['jquery']
		},
		'router': {
			deps: ['angular']
		},
		'app': {
			deps: ['router']
		}
	}
})
// 初始化myModule模块
require(["domReady!",'app'],function(document){
	angular.bootstrap(document, ['myModule'])
})