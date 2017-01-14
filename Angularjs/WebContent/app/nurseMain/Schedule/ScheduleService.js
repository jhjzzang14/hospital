angular.module('Schedule').
service('ScheduleService',function($q,ScheduleFactory){
	this.getNotice = function(){
		
		var defferd = $q.defer();
		
		ScheduleFactory.getNotice()
		.then(function(result){
			defferd.resolve(result);
		});
		
		return defferd.promise;		
	}
	
	this.getMasterNotice = function(){
		
		var defferd = $q.defer();
		
		ScheduleFactory.getMasterNotice()
		.then(function(result){
			defferd.resolve(result);
		});
		
		return defferd.promise;		
	}
	
	this.insertNotice = function(param){
		var defferd = $q.defer();
		
		if(param.title!=undefined && param.content!=undefined)
		{
			ScheduleFactory.insertNotice({
				title: param.title,
				content: param.content
			}).then(function(result){
				defferd.resolve(result);
			});	
		}else{
			defferd.reject({message:"fail"});
		}
		
		
		return defferd.promise;
	}
	
	this.noticeUpdate = function(param){
		var defferd = $q.defer();
		
		if(param.title!=undefined && param.content!=undefined)
		{
			ScheduleFactory.noticeUpdate({
				no: param.no,
				title: param.title,
				content: param.content
			}).then(function(result){
				defferd.resolve(result);
			});	
		}else{
			defferd.reject({message:"fail"});
		}
		
		
		return defferd.promise;
	}
	
	this.noticeDelete = function(param){
		var defferd = $q.defer();
		
			ScheduleFactory.noticeDelete({
				no: param.no
			}).then(function(result){
				defferd.resolve(result);
			});
		
		return defferd.promise;
	}
	
});