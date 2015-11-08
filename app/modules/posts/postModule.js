'use strict'

angular.module('spBlogger.posts',['spBlogger.posts.controllers','spBlogger.posts.services']);

angular.module('spBlogger.posts').config(['$stateProvider','$urlRouterProvider','$locationProvider',function($stateProvider,$locationProvider){
	$stateProvider.state('allPosts',{
		url:'/posts',
		templateUrl: 'modules/posts/views/posts.html',
		controller: 'PostController'
	});
	$stateProvider.state('singlePost',{
		url:'/posts/:id/:permalink',
		templateUrl: 'modules/posts/views/singlePost.html',
		controller: 'PostDetailsController'
	});

}]);