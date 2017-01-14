angular.module('PatientAdministration').
	service('PatientService', function($q,PatientFactory) {
		this.PatientSearch = function(params){
			var defferd = $q.defer();
			
			PatientFactory.PatientSearch({param: params.param})
			.then(function(result){
				defferd.resolve(result);
			}).catch(function(error){
				defferd.reject(error);
			})
			
			return defferd.promise;
		}
		
		this.del = function(param){
			var defferd = $q.defer();
			
			PatientFactory.del({param : param.param}).
			then(function(result){
				defferd.resolve(result);
			});
			
			return defferd.promise;
		}
		
		this.PatientInsert = function(param){
			var defferd = $q.defer();
			
			PatientFactory.PatientInsert({
				name: param.name,
				gender : param.gender,
				FbirthDay : param.FbirthDay,
				LbirthDay : param.LbirthDay,
				address : param.address,
				Ftel : param.Ftel,
				Mtel : param.Mtel,
				Ltel : param.Ltel
			}).then(function(result){
				defferd.resolve(result);
			});
			
			return defferd.promise;
		}
		
		this.PatientUpdate = function(param){
			var defferd = $q.defer();
			
			PatientFactory.PatientUpdate({
				patient_no : param.patient_no,
				name: param.name,
				gender : param.gender,
				FbirthDay : param.FbirthDay,
				LbirthDay : param.LbirthDay,
				address : param.address,
				Ftel : param.Ftel,
				Mtel : param.Mtel,
				Ltel : param.Ltel
			}).then(function(result){
				defferd.resolve(result);
			});
			
			return defferd.promise;
			}
	});