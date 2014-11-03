'use strict';

/**
 * @ngdoc function
 * @name angularJsProApp.controller:TestangularagilityCtrl
 * @description
 * # TestangularagilityCtrl
 * Controller of the angularJsProApp
 */
angular.module('angularJsProApp')
  .controller('TestangularagilityCtrl', function ($scope) {
    $scope.submitForm = function () {
    	if ($scope.testForm.$valid) {
    		console.log('Its valid');
    	} else {
    		console.error('Its NOT valid');
    	}
    };
  });
