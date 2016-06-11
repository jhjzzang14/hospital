angular.module('Login').
service('LoginFactory', function($q,$http) {
	var login = function(params){
		var defferd = $q.defer();
		
		$http({
			  method: 'GET',
			  url: 'http://localhost:8000/test',
			  params : {id: params.admin_id,pwd: params.admin_pwd},
			    headers: {
			    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			    }		  
		}).success(function(result){
			defferd.resolve(result);
		}).then(function(error){
			defferd.reject(error);
		});
		
		return defferd.promise;
	}
	
	var getInformation = function(params){
		var defferd = $q.defer();
		
		$http({
			  method: 'GET',
			  url: 'http://192.169.0.15:8000/Information',
			  params : {id : params.id},
			    headers: {
			    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			    }		  
		}).success(function(result){
			defferd.resolve(result);
		}).then(function(error){
			defferd.reject(error);
		});
		
		return defferd.promise;
	}
	
	return {login : login,
			getInformation:getInformation
	}
})