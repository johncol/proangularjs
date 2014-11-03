'use strict';

/**
 * @ngdoc function
 * @name angularJsProApp.controller:Chapter16scopesCtrl
 * @description
 * # Chapter16scopesCtrl
 * Controller of the angularJsProApp
 */
angular.module('angularJsProApp')

  .controller('Chapter16scopesCtrl', function ($scope) {
    $scope.views = 16;
    $scope.rating = "Five stars";
    $scope.data = {
    	views: 32,
    	rating: "Ten *s"
    };
    $scope.duplicateActualRating = function(value) {
    	$scope.rating = value;
    };
  })

  .directive('dirScopeIsolatedOneWayBinding', function () {
  	return {
  		restrict: 'A',
  		replace: true,
  		templateUrl: 'views/templates/templateScopes.html',
  		scope: {
  			attrValue: "@attrValue"
  		},
  		link: function (scope, element, attrs) {
  			scope.attrName = attrs['dirScopeIsolatedOneWayBinding'];
  		}
  	};
  })

  .directive('dirScopeIsolatedTwoWayBinding', function () {
  	return {
  		restrict: 'A',
  		replace: true,
  		templateUrl: 'views/templates/templateScopes.html',
  		scope: {
  			attrValue: "=attrValue"
  		},
  		link: function (scope, element, attrs) {
  			scope.attrName = attrs['dirScopeIsolatedTwoWayBinding'];
  		}
  	};
  })

  .directive('dirScopeIsolatedTwoWayBindingBehavior', function () {
  	return {
  		restrict: 'A',
  		replace: true,
  		templateUrl: 'views/templates/templateScopesButton.html',
  		scope: {
  			attrValue: '=attrValue',
  			someBehavior: '&someBehavior'
  		},
  		link: function (scope, element, attrs) {
  			scope.attrName = attrs['dirScopeIsolatedTwoWayBindingBehavior'];
  			scope.isolatedScopeValue = 'isolatedScopeValue';
  		}
  	};
  })

  ;

