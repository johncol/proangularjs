'use strict';

/**
 * @ngdoc function
 * @name angularJsProApp.controller:CompileserviceCtrl
 * @description
 * # CompileserviceCtrl
 * Controller of the angularJsProApp
 */
angular.module('angularJsProApp')

  .controller('CompileserviceCtrl', function ($scope) {
    $scope.sports = [
    	'Football',
    	'Basketball',
    	'Baseball',
    	'Tennis'
    ];
  })

  .directive('compileDirective', function ($compile) {
  	return {
  		link: function (scope, element, attrs) {
  			var content = '<section class="list-group-item" ng-repeat="sport in sports">{{sport}}</section>';
  			var contentElement = angular.element(content);
  			var compileFn = $compile(contentElement);
  			compileFn(scope);
  			element.append(contentElement);
  		}
  	};
  })

  ;
