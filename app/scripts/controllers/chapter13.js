'use strict';

/**
 * @ngdoc function
 * @name angularJsProApp.controller:Chapter13Ctrl
 * @description
 * # Chapter13Ctrl
 * Controller of the angularJsProApp
 */
angular.module('angularJsProApp')
  .service('Chap13EventService', function ($rootScope) {
  	return {
  		broadcastInfoUpdate: function(info) {
			$rootScope.$broadcast('attributeUpdateEvent', {info: info});
  		}
  	};
  })
  .controller('Chapter13Ctrl', function ($scope, Chap13EventService) {
    
  	$scope.$on('attributeUpdateEvent', function (event, data) {
  		$scope.infoEvent = data.info;
  	});

  	$scope.updateInfo = function() {
  		Chap13EventService.broadcastInfoUpdate($scope.info);
  	};

  });
