angular.module('Home',[]).
	config(function($stateProvider) {
		$stateProvider
			.state('Home',{
				url: '/Home',
				views: {
					'':{
						templateUrl: "app/nurseMain/nurse.html"
					},
					
					'top@Home': {
						templateUrl: "app/nurseMain/nurseTop/nurseTop.html"
					},
					
					'nav@Home': {
						templateUrl: "app/nurseMain/Nav/nav.html",
						controller: "navController"
					},
					'view@Home':{
						templateUrl: "app/nurseMain/Home/home.html",
						controller: "HomeController"
						
					}
				}
			});
	});