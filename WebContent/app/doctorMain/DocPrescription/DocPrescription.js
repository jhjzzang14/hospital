angular.module('DocPrescription',[])
.config(function($stateProvider) {
	$stateProvider
	.state('DocPrescription',{
		url: '/DocPrescription',
		views: {
			'':{
				templateUrl: "app/doctorMain/doctor.html"
			},
			
			'DocTop@DocPrescription': {
				templateUrl: "app/doctorMain/DocTop/docTop.html"
			},
			
			'DocNav@DocPrescription': {
				templateUrl: "app/doctorMain/DocNav/docNav.html",
				controller: 'DocNavController'
			},
			'DocView@DocPrescription':{
				templateUrl: "app/doctorMain/DocPrescription/docPrescription.html",
				controller: "DocPrescriptionController"
				
			}
		}
	});
})