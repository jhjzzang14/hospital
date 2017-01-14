angular.module('DocNav')
.controller('DocNavController',function($scope,$state){
	$scope.pageRedirect = function(num){
		switch(num){
		case 1:
			$state.go('DocHome');
			break;
		case 2:
			$state.go('DocPrescription');
			break;
		case 3:
			$state.go('DocSchedule');
			break;
		}
	}
});