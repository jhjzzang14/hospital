angular.module('PatientAdministration',[]).
	config(function($stateProvider) {
		$stateProvider
			.state('PatientAdministration',{
				url: '/Pt',
				views: {
					'':{
						templateUrl: "app/nurseMain/nurse.html"
					},
					
					'top@PatientAdministration': {
						templateUrl: "app/nurseMain/nurseTop/nurseTop.html"
					},
					
					'nav@PatientAdministration': {
						templateUrl: "app/nurseMain/Nav/nav.html",
						controller: "navController"
					},
					'view@PatientAdministration':{
						templateUrl: "app/nurseMain/patientAdministration/patientAdministration.html",
						controller: "PatientController"
						
					}
				}
			}
		);
	});