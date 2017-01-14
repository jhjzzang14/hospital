angular.module('Home')
.service('HomeService', function($q,HomeFactory) {
	this.getSelect = function(){
		var defferd = $q.defer();
		
		HomeFactory.getSelect()
		.then(function(result){
			defferd.resolve(result);
		});
		
		return defferd.promise;
	}
})