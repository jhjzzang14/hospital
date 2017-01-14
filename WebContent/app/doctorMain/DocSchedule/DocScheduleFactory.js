angular.module('DocSchedule')
.factory('DocScheduleFactory', function($q,$http) {
	var Lookup = function(param){
		var defferd = $q.defer();
		
		$http({
			  method: 'GET',
			  url: 'http://localhost:8000/getSchedule',
			  params : {start:param.start,end:param.end},
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
	
	return {Lookup : Lookup}
})