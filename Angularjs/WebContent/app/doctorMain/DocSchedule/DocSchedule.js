angular.module('DocSchedule',[])
.config(function($stateProvider) {
	$stateProvider
	.state('DocSchedule',{
		url: '/DocSchedule',
		views: {
			'':{
				templateUrl: "app/doctorMain/doctor.html"
			},
			
			'DocTop@DocSchedule': {
				templateUrl: "app/doctorMain/DocTop/docTop.html"
			},
			
			'DocNav@DocSchedule': {
				templateUrl: "app/doctorMain/DocNav/docNav.html",
				controller: 'DocNavController'
			},
			'DocView@DocSchedule':{
				templateUrl: "app/doctorMain/DocSchedule/docSchedule.html",
				controller: "DocScheduleController"
				
			}
		}
	});
})