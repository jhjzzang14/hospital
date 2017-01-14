angular.module('Login').
service('LoginService', function($q,LoginFactory) {
	var id,pwd;
	this.login = function(params){
		var defferd = $q.defer();
		id =  params.admin_id;
		pwd = params.admin_pwd;
		LoginFactory.login({
			admin_id : params.admin_id,
			admin_pwd : params.admin_pwd
		}).then(function(result){
					
			defferd.resolve(result);
			
		}).catch(function(error){
			defferd.reject(error);
		});
		
		return defferd.promise;
	}
	
	
	this.Information = function(){
		var defferd = $q.defer();
		LoginFactory.getInformation({
			id:id
		}).then(function(result){
			defferd.resolve(result);
		});
		
		return defferd.promise;
	}
})