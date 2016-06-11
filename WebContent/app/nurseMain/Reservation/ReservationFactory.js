angular.module('Reservation')
	.factory('RsFactory', function($q,$http) {
		var dateSearch = function(param){
			var defferd = $q.defer();
			
			$http({
				  method: 'GET',
				  url: 'http://localhost:8000/Reservation',
				  params : {reservation: param.param},
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
		
		return {dateSearch : dateSearch }
	});