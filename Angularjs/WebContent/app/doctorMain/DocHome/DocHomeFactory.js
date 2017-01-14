angular.module('DocHome')
.factory('DocHomeFactory', function($q,$http) {
	
	var transPatient = function(param){
		var defferd = $q.defer();
		
		$http({
			  method: 'POST',
			  url: 'http://localhost:8000/Patient',
			  params:{patient_no:param.patient_no,dept_name: param.dept_name},
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
	
	var getTransPatient = function(param){
		var defferd = $q.defer();
		
		$http({
			  method: 'GET',
			  url: 'http://localhost:8000/getPatient',
			  params:{dept_no:param.dept_no},
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
	
	/*var insertPrescription = function(param){
		var defferd = $q.defer();
		
		$http({
			  method: 'post',
			  url: 'http://localhost:8000/insertPrescription',
			  params:{patient_name:param.patient_name,patient_birthDay:param.patient_birthDay},
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
	*/
	
	return {transPatient: transPatient,getTransPatient:getTransPatient}//insertPrescription: insertPrescription}

});