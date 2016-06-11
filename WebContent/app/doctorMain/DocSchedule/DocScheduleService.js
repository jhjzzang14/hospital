angular.module('DocSchedule')
.service('DocScheduleService', function($q,DocScheduleFactory) {
	this.Lookup = function(param){
		var defferd = $q.defer();
		
		DocScheduleFactory.Lookup({start : param.start,end:param.end})
		.then(function(result){
			defferd.resolve(result);
		});
		
		return defferd.promise;
	}
});