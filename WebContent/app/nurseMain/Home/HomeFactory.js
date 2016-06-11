angular.module('Home')
.factory('HomeFactory', function($q,$http) {
	
	var getSelect = function(){
		var defferd = $q.defer();
		
		$http({
			  method: 'GET',
			  url: 'http://localhost:8000/getSelect',
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
	
	return {getSelect : getSelect}
})