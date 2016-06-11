
angular.module('Schedule').
controller('ScheduleController',function($scope,$state,ScheduleService){
	ScheduleService.getNotice()
	.then(function(result){
		$scope.items = result.data;	
	});
	
	ScheduleService.getMasterNotice()
	.then(function(result){
		$scope.values = result.data;	
	});
	
	$scope.createNotice = function(){
	
		$("#myModal").modal();
		
		$scope.submit =function(){
			ScheduleService.insertNotice({
				title: $scope.title,
				content: $scope.content
			}).then(function(result){
				alert(result.message);
			}).catch(function(error) {
				alert(error.message);
			});
		}
	}
	
	//수정 삭제
	$scope.update = function(param){
		$scope.title = param.title;
		$scope.content = param.content;
		$("#update").modal();
		
		$scope.noticeUpdate = function(){
			ScheduleService.noticeUpdate({
				no: param.no,
				title: $scope.title,
				content: $scope.content
			}).then(function(result){
				alert(result.message);
				$scope.title="";
				$scope.content="";
			}).catch(function(error) {
				alert(error.message);
			});
		}
		
		$scope.noticeDelete = function(){
			ScheduleService.noticeDelete({
				no: param.no
			}).then(function(result){
				alert(result.message);
			}).catch(function(error) {
				alert(error.message);
			});
		}
	}
	
	
	

});