'use strict';

angular.module('angularJsProApp').controller('DirectiveTestCtrl', function ($scope) {
	$scope.day = 'thursday';
	console.log('$scope.day: ', $scope.day);
});