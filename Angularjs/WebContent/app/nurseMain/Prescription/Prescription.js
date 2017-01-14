angular.module('Prescription',[]).
config(function($stateProvider) {
	$stateProvider
		.state('Prescription',{
			url: '/Prescription',
			views: {
				'':{
					templateUrl: "app/nurseMain/nurse.html"
				},
				
				'top@Prescription': {
					templateUrl: "app/nurseMain/nurseTop/nurseTop.html"
				},
				
				'nav@Prescription': {
					templateUrl: "app/nurseMain/Nav/nav.html",
					controller: "navController"
				},
				'view@Prescription':{
					templateUrl: "app/nurseMain/Prescription/prescription.html",
					controller: "PsController"
					
				}
			}
		}).state('InfoPrescription',{
		url: '/InfoPrescription',
		views: {
			'':{
				templateUrl: "app/nurseMain/nurse.html"
			},
			
			'top@InfoPrescription': {
				templateUrl: "app/nurseMain/nurseTop/nurseTop.html"
			},
			
			'nav@InfoPrescription': {
				templateUrl: "app/nurseMain/Nav/nav.html",
				controller: "navController"
			},
			'view@InfoPrescription':{
				templateUrl: "app/nurseMain/Prescription/Info.html",
				controller: "PsController"
			
			}
		}
	});
});