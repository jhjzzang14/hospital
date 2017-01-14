angular.module('DocPrescription')
.service('DocPrescriptionFactory', function($q,$http) {
	var getPatientInfo = function(param){
		var defferd = $q.defer();
		
		$http({
			  method: 'GET',
			  url: 'http://localhost:8000/getPatientInfo',
			  params : {patient_no:param.patient_no},
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
	
	
	
	var pushPrescrition = function(param){
		var defferd = $q.defer();
		
		$http({
			  method: 'post',
			  url: 'http://localhost:8000/insertPrescription',
			  params : {
					patient_name : param.patient_name,
					patient_birthDay : param.patient_birthDay,
					patient_ex : param.patient_ex,
					patient_Usage : param.patient_Usage,
					dept_no : param.dept_no
			  },
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
	
	return {getPatientInfo:getPatientInfo,
			pushPrescrition:pushPrescrition
		   }
});