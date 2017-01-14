angular.module('Reservation')
	.controller('RsController', function($scope,$rootScope,$filter,RsService) {
		
		$scope.dateSearch = function(){
			
			var nowDate = $scope.nowDate;
			
			nowDate = $filter('date')(new Date(nowDate), 'yyyy-MM-dd');
			
			RsService.dateSearch({param : nowDate}). 
			then(function(result){
				
				if(result.message){
					alert(result.message);
				}
				$scope.items = result.data;
				
				$rootScope.$broadcast('Sharing', result.data[0]);
			});
			
		}
});