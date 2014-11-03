'use strict';

/**
 * @ngdoc function
 * @name angularJsProApp.controller:WindowserviceCtrl
 * @description
 * # WindowserviceCtrl
 * Controller of the angularJsProApp
 */
angular.module('angularJsProApp')
  .controller('WindowserviceCtrl', function ($scope, $window) {
    $scope.showAlert = function () {
    	$window.alert('HI :D');
    };
  });
