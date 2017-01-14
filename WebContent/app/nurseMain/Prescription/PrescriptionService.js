angular.module('Prescription')
.service('PsService', function($q,PsFactory) {
	this.PsSearch = function(param){
		var defferd = $q.defer();
		
		PsFactory.PsSearch({param: param.param})
		.then(function(result){
			defferd.resolve(result);
		});
		
		return defferd.promise;
	}

	this.prescriptionSearch = function(param){
		var defferd = $q.defer();
		
		PsFactory.prescriptionSearch({prescription_no: param.prescription_no})
		.then(function(result){
			defferd.resolve(result);
		});
		
		return defferd.promise;
	}
});