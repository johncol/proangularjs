'use strict';

/**
 * @ngdoc function
 * @name angularJsProApp.controller:TimeoutserviceCtrl
 * @description
 * # TimeoutserviceCtrl
 * Controller of the angularJsProApp
 */
angular.module('angularJsProApp')
  .controller('TimeoutserviceCtrl', function ($scope, $timeout, $document) {
    $scope.seconds = 3;
    $timeout(function () {
    	var message = angular
    		.element('<p></p>')
    		.addClass('alert alert-info')
    		.text('Sample message added using $timeout service');
    	$document.find('.panel-body').append(message);
    }, $scope.seconds * 1000);
  });
