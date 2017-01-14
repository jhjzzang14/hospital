angular.module('PatientAdministration').
service('PatientFactory', function($q,$http) {
	var PatientSearch = function(params){
		var defferd = $q.defer();
		$http({
			  method: 'GET',
			  url: 'http://localhost:8000/PatientSearch',
			  params : {Patient: params.param},
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
	
	var del = function(param){
		var defferd = $q.defer();
		
		$http({
			  method: 'GET',
			  url: 'http://localhost:8000/PatientDel',
			  params : {param: param.param},
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
	
	var PatientInsert = function(param){
		var defferd = $q.defer();
		
		$http({
			  method: 'POST',
			  url: 'http://localhost:8000/PatientInsert',
			  params : {		
				  	patient_no : param.patient_no,
				    name: param.name,
					gender : param.gender,
					FbirthDay : param.FbirthDay,
					LbirthDay : param.LbirthDay,
					address : param.address,
					Ftel : param.Ftel,
					Mtel : param.Mtel,
					Ltel : param.Ltel
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
	
	var PatientUpdate = function(param){
		var defferd = $q.defer();
		
		$http({
			  method: 'POST',
			  url: 'http://localhost:8000/PatientUpdate',
			  params : {		
				  	patient_no:param.patient_no,
					name: param.name,
					gender : param.gender,
					FbirthDay : param.FbirthDay,
					LbirthDay : param.LbirthDay,
					address : param.address,
					Ftel : param.Ftel,
					Mtel : param.Mtel,
					Ltel : param.Ltel
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
	
	return {PatientSearch : PatientSearch,
			del : del,
			PatientInsert : PatientInsert,
			PatientUpdate:PatientUpdate
	}
})