angular.module('Schedule').
factory('ScheduleFactory',function($q,$http){

	var getNotice = function(){
		var defferd = $q.defer();
		
		$http({
			  method: 'GET',
			  url: 'http://localhost:8000/getNotice',
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
	
	var getMasterNotice = function(){
		var defferd = $q.defer();
		
		$http({
			  method: 'GET',
			  url: 'http://localhost:8000/getMasterNotice',
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
	
	var insertNotice = function(param){
		var defferd = $q.defer();
		
		$http({
			  method: 'POST',
			  params:{
				title:param.title,
				content:param.content
			  },
			  url: 'http://localhost:8000/insertNotice',
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
	
	var noticeUpdate = function(param){
		var defferd = $q.defer();
		
		$http({
			  method: 'POST',
			  params:{
				 no: param.no,
				title:param.title,
				content:param.content
			  },
			  url: 'http://localhost:8000/updateNotice',
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
	
	var noticeDelete = function(param){
		var defferd = $q.defer();
		console.log(param.no);
		$http({
			  method: 'GET',
			  params:{
				 no: param.no
			  },
			  url: 'http://localhost:8000/deleteNotice',
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
	
	return {getNotice:getNotice,
		insertNotice:insertNotice,
		getMasterNotice:getMasterNotice,
		noticeUpdate:noticeUpdate,
		noticeDelete:noticeDelete	
	}
});