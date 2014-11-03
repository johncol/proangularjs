'use strict';

/**
 * @ngdoc function
 * @name angularJsProApp.controller:TransclusionCtrl
 * @description
 * # TransclusionCtrl
 * Controller of the angularJsProApp
 */
angular.module('angularJsProApp')

  .controller('TransclusionCtrl', function ($scope) {
    $scope.origin = 'TransclusionCtrl';
  })

  .directive('transclusionExample', function () {
  	return {
  		transclude: true,
  		scope: true,
  		restrict: 'E',
  		templateUrl: 'views/templates/transclusion.html',
  		link: function(scope, element, attrs) {
  			scope.origin = 'TransclusionExampleDirective';
  		}
  	};
  })

  ;
