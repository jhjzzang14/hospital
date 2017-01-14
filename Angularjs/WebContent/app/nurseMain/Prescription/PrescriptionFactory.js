angular.module('Prescription')
.service('PsFactory', function($q,$http) {
	var PsSearch = function(param){
		var defferd = $q.defer();
		
		$http({
			  method: 'GET',
			  url: 'http://localhost:8000/Prescription',
			  params : {patient_name: param.param},
			    headers: {
			    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			    }		  
		}).success(function(result){
			defferd.resolve(result);
		}).error(function(error){
			defferd.reject(error);
		});
		
		return defferd.promise;
	}
	
	var prescriptionSearch = function(param){
		var defferd = $q.defer();
		
		$http({
			  method: 'GET',
			  url: 'http://localhost:8000/PrescriptionSearch',
			  params : {prescription_no: param.prescription_no},
			    headers: {
			    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			    }		  
		}).success(function(result){
			defferd.resolve(result);
		}).error(function(error){
			defferd.reject(error);
		});
		
		return defferd.promise;
	}
	
	return {PsSearch : PsSearch,prescriptionSearch: prescriptionSearch}
});