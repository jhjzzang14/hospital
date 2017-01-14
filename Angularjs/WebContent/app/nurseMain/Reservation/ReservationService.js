angular.module('Reservation').
service('RsService', function($q,RsFactory) {
	this.dateSearch = function(param){
		var defferd = $q.defer();
		
		RsFactory.dateSearch({param : param.param}).
		then(function(result){
			defferd.resolve(result);
		});
		return defferd.promise;
	}
});