var testApp = angular.module('testApp',[]);
testApp.directive('myDirective',function(){
	return {
		restrict:'E',
		scope:{},
		template:'<label>My Directive: <input type="button" value="click me" class="btn btn-success" ng-model="userinput" ng-click="invoked()" class="form-control"/></label>'
				+'<p>{{displaytext}} : <b>{{ctrlHits}}</b></p>',
		controller:'@', 
		name:'ctrlName'
	}
});

testApp.controller('controllerOne',function($scope){ //controller one
	$scope.ctrlHits = 0;
	$scope.displaytext = 'Click to see the name of the controller used.';
	$scope.invoked = function(){       //Will call this function on change and update the value of displaytext & ctrlHits variables.
		$scope.displaytext = 'controllerOne Hits';
		$scope.ctrlHits++;
	}
});

testApp.controller('controllerTwo',function($scope){ //controller two
	$scope.ctrlHits = 0;
	$scope.displaytext = 'Type in to see the name of the controller used.';
	$scope.invoked = function(){       //Will call this function on change and update the value of displaytext & ctrlHits variables.
		$scope.displaytext = 'controllerTwo hits';
		$scope.ctrlHits++;
	}
});