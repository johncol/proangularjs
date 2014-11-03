'use strict';

/**
 * @ngdoc function
 * @name angularJsProApp.controller:HttpserviceCtrl
 * @description
 * # HttpserviceCtrl
 * Controller of the angularJsProApp
 */
angular.module('angularJsProApp')

  .controller('HttpserviceCtrl', function ($scope, $http, $log) {
    $scope.products = [];
    $scope.json = 'productsa.json';
    $scope.loadProducts = function () {
    	$http.get($scope.json)
    		.success(function (response) {
    			$scope.products = response;
    			$log.debug('response: ', response);
    		})
    		.error(function (response) {
    			$log.debug('ERROR: ', response);
    		});
    };
    $scope.loadProductsSecondWay = function () {
    	$http.get($scope.json).then(
    		function (response) {
    			$scope.products = response.data;
    			$log.debug('response: ', response);
    		},
    		function (response) {
    			$log.debug('ERROR: ', response);
    		});
    		
    };
  })

;
