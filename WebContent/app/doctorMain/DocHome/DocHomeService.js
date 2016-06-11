angular.module('DocHome')
.service('DocHomeService', function($q,DocHomeFactory) {
	this.transPatient = function(params){
		var defferd = $q.defer();
		
		DocHomeFactory.transPatient({patient_no:params.patient_no,dept_name: params.dept_name})
		.then(function(result){
			defferd.resolve(result);
		});
		return defferd.promise;
	}
	
	this.getTransPatient = function(param){
		var defferd = $q.defer();
		
		DocHomeFactory.getTransPatient({dept_no: param.dept_no})
		.then(function(result){
			defferd.resolve(result);
		});
		
		return defferd.promise;
	}
	
	/*this.insertPrescription = function(param){
		var defferd = $q.defer();
		
		DocHomeFactory.insertPrescription({patient_name:param.patient_name,patient_birthDay:param.patient_birthDay})
		.then(function(result){
			defferd.resolve(result);
		});
		
		return defferd.promise;
	}
	*/
});