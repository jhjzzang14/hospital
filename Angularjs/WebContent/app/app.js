angular.module('myApp', ['ui.router','ui.bootstrap','Login','Nurse','Doctor']).
config(function($stateProvider,$urlRouterProvider){

	$urlRouterProvider.otherwise('/');
	$stateProvider.
	state('app',{
		url:'/',
		templateUrl: '',
		controller: 'appController'
	});
}).controller('appController',function($scope,$state){
	$state.go('Login');
});