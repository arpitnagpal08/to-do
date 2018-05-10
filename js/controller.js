var app=angular.module('mainApp',[]);

app.controller('mainCtrl', function($scope){
	$scope.tasks=[];
	var taskData=localStorage['tasksList'];
	if(taskData!=undefined){
		$scope.tasks=JSON.parse(taskData);
	}
	$scope.searchEnter=function(){
		if(event.which==13 && $scope.task!=""){
			$scope.addTask();
		}
	};
	$scope.addTask=function(){
		$scope.tasks.push({'taskMessage':$scope.task, 'status':false});
		$scope.task='';
		localStorage['tasksList']=JSON.stringify($scope.tasks);
	};
	$scope.contentEdit=function(message){
		for(i=0;i<$scope.tasks.length;i++){
			if($scope.tasks[i].taskMessage==message){
				$scope.tasks[i].taskMessage=event.target.innerText;
			}
		}
		localStorage['tasksList']=JSON.stringify($scope.tasks);
		event.target.contentEditable=event.target.contentEditable=="false"?"true":"false";
	};
	$scope.enterAgain=function(message){
		if(event.which==13 && message!=""){
			$scope.contentEdit(message);
		}
	};
	$scope.deleteTodo = function  (index) {
		$scope.tasks.splice(index, 1);
		localStorage['tasksList']=JSON.stringify($scope.tasks);
	};
});