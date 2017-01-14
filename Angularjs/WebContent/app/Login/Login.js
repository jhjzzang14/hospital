angular.module('Login',[]).
	config(function($stateProvider) {
		$stateProvider
		.state('Login',{
			url: '/',
			templateUrl: 'app/Login/login.html',
			controller: 'LoginController'
		});
	});