angular.module('Home').
	controller('HomeController',function($rootScope,$scope,$state,PatientService,HomeService,DocHomeService){
		$scope.PatientSearch = function(){
			PatientService.PatientSearch({param: $scope.na})
			.then(function(result){
				if(result.message){alert(result.message)}
				
				$scope.items = result.data;	
				
			});
		
			HomeService.getSelect()
			.then(function(result){
				$scope.depts = result.data;
			});
			
			}
		
		$scope.transPatient = function(param){
			DocHomeService.transPatient({patient_no:param.patient_no,dept_name:param.dept_name})
			.then(function(result){
				alert(result.message);
			});
		}
		
		
		
	});