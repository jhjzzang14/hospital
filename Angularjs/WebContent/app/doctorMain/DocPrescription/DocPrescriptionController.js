angular.module('DocPrescription')
.controller('DocPrescriptionController', function($rootScope,$scope,$state,DocPrescriptionService) {

			
			$scope.patient_name = localStorage.getItem('patient_name');
			$scope.patient_birthDay = localStorage.getItem('patient_birthDay');
	
			
			$scope.ContentsType = [];

			var value = [];
		
			$scope.insert = function(){
				for(var i=0 ; i < $scope.ContentsType.length ;i++){

						value += $scope.ContentsType[i] +" ";	
				}
				
			DocPrescriptionService.pushPrescrition({
			patient_name:localStorage.getItem('patient_name'),
			patient_birthDay:localStorage.getItem('patient_birthDay'),
			patient_ex : value,
			patient_Usage : $scope.Usage,
			dept_no:localStorage.getItem('dept_no')
		}).then(function(result){
			if(result.message){
			alert(result.message);
			$state.go('DocHome');
			
			localStorage.removeItem('patient_name');
			localStorage.removeItem('patient_birthDay');
			}else{
			alert(result.err);
			}
			
		});
		
	}
			
});