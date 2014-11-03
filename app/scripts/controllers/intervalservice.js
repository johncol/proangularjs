'use strict';

/**
 * @ngdoc function
 * @name angularJsProApp.controller:IntervalserviceCtrl
 * @description
 * # IntervalserviceCtrl
 * Controller of the angularJsProApp
 */
angular.module('angularJsProApp')
  .controller('IntervalserviceCtrl', function ($scope, $interval, $document) {
  	var numOfMessages = 0;
    $scope.seconds = 2;
    $scope.times = 6;
    $interval(function () {
    	var message = angular
    		.element('<li></li>')
    		.addClass('list-group-item')
    		.text('Sample message #' + ++numOfMessages + ' added using $interval service');
    	$document.find('.list-group').append(message);
    }, $scope.seconds * 1000, $scope.times);
  });
