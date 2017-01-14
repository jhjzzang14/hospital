
angular.module('Login').
controller('LoginController', function($scope,$state,LoginService) {
	$scope.login = function(){
		LoginService.login({
				admin_id :$scope.admin_id,
				admin_pwd : $scope.admin_pwd
		}).then(function(result){
			
			if(result.message)
			{
				alert(result.message);
			}
			
			if(result.code==1){
				$state.go('Home');
			}else if(result.code==2){
				localStorage.setItem('dept_no', result.dept_no);
				alert(localStorage.getItem('dept_no'));
				$state.go('DocHome');		
			}
			 
			
			//location.href = './app/Main/Main.html';
		}).catch(function(error){
			console.log(error);
			alert(error);
		});
	}
})