'use strict';

/**
 * @ngdoc function
 * @name angularJsProApp.controller:C13ctrlinheritanceCtrl
 * @description
 * # C13ctrlinheritanceCtrl
 * Controller of the angularJsProApp
 */
angular.module('angularJsProApp')

  .controller('C13ctrlinheritanceCtrl', function ($scope) {
    $scope.updateDataInfo = function() {
    	$scope.data.info = 'Behavior defined in controller father';
    };
  })

  .controller('C13ctrlinheritanceCtrlChild1', function ($scope) {
    $scope.updateDataInfo = function() {
    	$scope.data.info = 'Behavior defined in child controller number 1';
    };
  })
  
  .controller('C13ctrlinheritanceCtrlChild2', function ($scope) {
    $scope.updateDataInfo = function() {
    	$scope.data.info = 'Behavior defined in child controller number 2';
    };
  });
