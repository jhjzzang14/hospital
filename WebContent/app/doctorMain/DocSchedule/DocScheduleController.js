angular.module('DocSchedule')
.controller('DocScheduleController', function($scope,$filter,DocScheduleService) {
	/*$scope.test = function(){
		LoginService.Information()
		.then(function(result){
			alert(result.data);
		});
	}
	*/

	
	$scope.test = function(){
		var start = $scope.start;
		
		var end = $scope.end;
		
		start = $filter('date')(new Date(start), 'yyyy-MM-dd');
		
		end = $filter('date')(new Date(end), 'yyyy-MM-dd');
		
		DocScheduleService.Lookup({start : start , end : end})
		.then(function(result){
			
		});
		
	}
});