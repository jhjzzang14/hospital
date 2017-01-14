angular.module('PatientAdministration').
	controller('PatientController',function($scope,$state,$filter,PatientService){
		$scope.insertShow = true;
		$scope.updateshow = true;
		$scope.search = function(){
			PatientService.PatientSearch({param : $scope.Patient}).
				then(function(result){
					if(result.message) {alert(result.message)};
					$scope.items = result.data;
					for(var i=0 ;i<result.data.length;i++){
						$scope.items[i].createdate = $filter('date')(new Date($scope.items[i].createdate), 'yyyy-MM-dd');
			        	$scope.items[i].last = $filter('date')(new Date($scope.items[i].last), 'yyyy-MM-dd');	
					}
				
		    		$scope.Del = function(param){
		    			PatientService.del({param:param}).
		    			then(function(result){
		    				alert(result.message);
		    			});
		    		}   		
				});
		}
		
		$scope.insert = function(){
				
			PatientService.PatientInsert({
				name : $scope.name,
				gender : $scope.gender,
				FbirthDay : $scope.FbirthDay,
				LbirthDay : $scope.LbirthDay,
				address : $scope.address,
				Ftel : $scope.Ftel,
				Mtel : $scope.Mtel,
				Ltel : $scope.Ltel
			}).then(function(result){
				if(result.message)alert(result.message);
				
				if(result.err){
				alert(result.err);
				$scope.name = null;
				$scope.gender =  null;
				$scope.FbirthDay =  null;
				$scope.LbirthDay =  null;
				$scope.address =  null;
				$scope.Ftel =  null;
				$scope.Mtel =  null;
				$scope.Ltel =  null;
				}
			});
		}
		

		$scope.updatePatient = function(param){
			$scope.insertShow = false;
			$scope.updateshow = false;
			
			$scope.name = param.name;
			$scope.gender = param.gender;
			$scope.FbirthDay = param.birthday.substring(0, 6);
			$scope.LbirthDay = param.birthday.substring(7, 14);
			$scope.address = param.address;
			$scope.Ftel = param.tel.substring(0,3);
			$scope.Mtel = param.tel.substring(4,8);
			$scope.Ltel = param.tel.substring(9,13);
			
			$scope.Update = function(){

			PatientService.PatientUpdate({
				patient_no : param.patient_no,
				name : $scope.name,
				gender : $scope.gender,
				FbirthDay : $scope.FbirthDay,
				LbirthDay : $scope.LbirthDay,
				address : $scope.address,
				Ftel : $scope.Ftel,
				Mtel : $scope.Mtel,
				Ltel : $scope.Ltel
			})
			.then(function(result){
			if(result.message){
				alert(result.message);
				$scope.insertShow = true;
				$scope.updateshow = true;
				
				$scope.name = null;
				$scope.gender =  null;
				$scope.FbirthDay =  null;
				$scope.LbirthDay =  null;
				$scope.address =  null;
				$scope.Ftel =  null;
				$scope.Mtel =  null;
				$scope.Ltel =  null;
			}
			
			});
			}
		}
		
	})