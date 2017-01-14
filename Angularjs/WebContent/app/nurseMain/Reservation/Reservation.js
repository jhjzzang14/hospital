angular.module('Reservation',[]).
	config(function($stateProvider) {
		$stateProvider
			.state('Reservation',{
				url: '/Reservation',
				views: {
					'':{
						templateUrl: "app/nurseMain/nurse.html"
					},
					
					'top@Reservation': {
						templateUrl: "app/nurseMain/nurseTop/nurseTop.html"
					},
					
					'nav@Reservation': {
						templateUrl: "app/nurseMain/Nav/nav.html",
						controller: "navController"
					},
					'view@Reservation':{
						templateUrl: "app/nurseMain/Reservation/reservation.html",
						controller: "RsController"
						
					}
				}
			}
					);
	});