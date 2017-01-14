angular.module('Prescription').
	controller('PsController', function($scope,$state,$filter,PsService) {
		
		$scope.PsSearch = function(){
			PsService.PsSearch({param:$scope.na}).
			then(function(result){
				
				$scope.prescritions = result.data;
				
				for(var i=0 ;i<result.data.length;i++ )
					{
						$scope.prescritions[i].createAt = $filter('date')(new Date($scope.prescritions[i].createAt), 'yyyy-MM-dd');
					}
				
				$scope.Items = result.data;
			});
			
		}
		
		$scope.print = function(param){
			alert(window.innerHeight);
			window.print();
		}
		
		$scope.openPrescription = function(param){
			$state.go('InfoPrescription');
			
			PsService.prescriptionSearch({prescription_no : param})
			.then(function(result){
			$scope.Items = result.data
			});
			
		}
		
		$scope.PrePrint = function(){
			window.print();
		}
		
		
	})