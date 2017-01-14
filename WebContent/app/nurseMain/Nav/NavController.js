angular.module('Nav').
	controller('navController',function($scope,$state){
		var select;
		$scope.movePage = function(num){
			select=num;
			switch(num){
			case 1:
				$state.go('Home');
				break
			case 2:
				$state.go('PatientAdministration');
				break
			case 3:
				$state.go('Reservation');
				break
			case 4:
				$state.go('Prescription');
				break
			case 5:
				$state.go('Schedule');
				break
			}

		}
		
		$scope.pageTab =function(num1){
			if(num1==1){
				return 'select';
			}else if(num1==select){
				return 'select';
			}
		}
	})