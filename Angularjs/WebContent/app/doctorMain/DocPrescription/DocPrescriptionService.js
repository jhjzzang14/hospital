angular.module('DocPrescription')
.service('DocPrescriptionService', function($q,DocPrescriptionFactory) {
	this.getPatientInfo = function(param){
		var defferd = $q.defer();
		
		DocPrescriptionFactory.getPatientInfo({patient_no:param.patient_no})
		.then(function(result){
			defferd.resolve(result);
		})
		
		return defferd.promise;
	}
	
	this.pushPrescrition = function(param){
		var defferd = $q.defer();
		
		DocPrescriptionFactory.pushPrescrition({
			patient_name : param.patient_name,
			patient_birthDay : param.patient_birthDay,
			patient_ex : param.patient_ex,
			patient_Usage : param.patient_Usage,
			dept_no : param.dept_no
		}).then(function(result){
			defferd.resolve(result);
		})
		
		return defferd.promise;
	}
});