angular.module('Schedule',['ui.calendar']).
	config(function($stateProvider) {
		$stateProvider
			.state('Schedule',{
				url: '/Schedule',
				views: {
					'':{
						templateUrl: "app/nurseMain/nurse.html"
					},
					
					'top@Schedule': {
						templateUrl: "app/nurseMain/nurseTop/nurseTop.html"
					},
					
					'nav@Schedule': {
						templateUrl: "app/nurseMain/Nav/nav.html",
						controller: "navController"
					},
					'view@Schedule':{
						templateUrl: "app/nurseMain/Schedule/schedule.html",
						controller: 'ScheduleController'
						
					}
				}
			}).state('createNotice',{
				url: '/createNotice',
				views: {
					'':{
						templateUrl: "app/nurseMain/nurse.html"
					},
					
					'top@createNotice': {
						templateUrl: "app/nurseMain/nurseTop/nurseTop.html"
					},
					
					'nav@createNotice': {
						templateUrl: "app/nurseMain/Nav/nav.html",
						controller: "navController"
					},
					'view@createNotice':{
						templateUrl: "app/nurseMain/Schedule/createNotice.html",
						controller: 'ScheduleController'
						
					}
				}
			});
	});