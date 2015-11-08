'use strict'

var routerApp=angular.module('spBlogger',['ui.router','spBlogger.posts']);

routerApp.config(['$locationProvider',function($locationProvider){
	 $locationProvider.html5Mode(false);
}]);

routerApp.run(['$state',function($state){
	  
      $state.go('allPosts');
}]);