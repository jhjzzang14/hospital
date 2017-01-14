angular.module('DocHome',[]).
	config(function($stateProvider) {
		$stateProvider
			.state('DocHome',{
				url: '/DocHome',
				views: {
					'':{
						templateUrl: "app/doctorMain/doctor.html"
					},
					
					'DocTop@DocHome': {
						templateUrl: "app/doctorMain/DocTop/docTop.html"
					},
					
					'DocNav@DocHome': {
						templateUrl: "app/doctorMain/DocNav/docNav.html",
						controller: 'DocNavController'
					},
					'DocView@DocHome':{
						templateUrl: "app/doctorMain/DocHome/docHome.html",
						controller: "docHomeController"
						
					}
				}
			});
	});