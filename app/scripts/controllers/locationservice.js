'use strict';

/**
 * @ngdoc function
 * @name angularJsProApp.controller:LocationserviceCtrl
 * @description
 * # LocationserviceCtrl
 * Controller of the angularJsProApp
 */
angular.module('angularJsProApp')
  .controller('LocationserviceCtrl', function ($scope, $location, $anchorScroll, $log) {

    $scope.locationProps = {
    	absUrl: $location.absUrl(),
    	url: $location.url(),
    	protocol: $location.protocol(),
    	host: $location.host(),
    	port: $location.port(),
    	path: $location.path(),
    	search: $location.search(),
    	hash: $location.hash(),
    };

    $scope.props = function (obj) {
    	return !!obj ? Object.keys(obj) : [];
    };

    $scope.panels = [1,2,3,4,5,6];

    $scope.goTo = function (hash) {
    	$log.log('Setting hash to "' + hash + '"');
    	$log.error('Lets say an error ocurred...(testing error method from $log service)');
    	$location.hash(hash);
    };

    $scope.$on('$locationChangeStart', function (event) {
    	$log.debug('$locationChangeStart event was triggered: ', $location.url());
    });

    $scope.$on('$locationChangeSuccess', function (event) {
    	$log.debug('$locationChangeSuccess event was triggered: ', $location.url());
    });

  });
