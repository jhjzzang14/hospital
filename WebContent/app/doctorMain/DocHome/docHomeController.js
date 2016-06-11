angular.module('DocHome')
.controller('docHomeController', function($scope,$state,$filter,DocHomeService,RsService) {
	
	setInterval(function() {
		DocHomeService.getTransPatient({dept_no:localStorage.getItem('dept_no')})
		.then(function(result){
			$scope.items = result.data;
		});		
	}, 3000);
	
	
	$scope.nowDate = $filter('date')(new Date(), 'yyyy-MM-dd');
	
	RsService.dateSearch({param : $scope.nowDate})
	.then(function(result){
		$scope.reses = result.data;
	});
	

	/*$scope.getPrescription = function(param){
		DocHomeService.insertPrescription({patient_name:param.patient_name,patient_birthDay:param.patient_birthDay})
		.then(function(result){
			localStorage.setItem('patient_no',result.patient_no);
			$state.go('DocPrescription');
		});
	}
	*/
	
	$scope.getPrescription = function(param){
		
		localStorage.setItem('patient_name', param.patient_name);
		localStorage.setItem('patient_birthDay', param.patient_birthDay);
		
		$state.go('DocPrescription');
	}
});