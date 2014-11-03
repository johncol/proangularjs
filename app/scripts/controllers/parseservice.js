'use strict';

/**
 * @ngdoc function
 * @name angularJsProApp.controller:ParseserviceCtrl
 * @description
 * # ParseserviceCtrl
 * Controller of the angularJsProApp
 */
angular.module('angularJsProApp')
  .controller('ParseserviceCtrl', function ($scope) {
    $scope.expression = 'price | currency';
    $scope.price = 30;
    $scope.name = "johN";
  })

  .directive('expressionEval', function ($parse) {
  	return {
  		link: function (scope, element, attrs) {
  			console.log('attrs[expressionEval]: ', attrs['expressionEval']);
  			scope.$watch(attrs['expressionEval'], function (newValue) {
  				console.log('newValue: ', newValue);
  				try {
  					var parseFunction = $parse(newValue);
  					var result = parseFunction(scope);
  					if (angular.isUndefined(result)) {
  						result = 'No result';
  					}
  				} catch (e) {
  					result = 'Cannot evaluate expression';
  				}
  				element.text(result);
  			});
  		}
  	}
  })

  .directive('secondExpressionEval', function ($parse) {
  	return {
  		scope: {
  			productPrice: '=productPrice'
  		},
  		link: function (scope, element, attrs) {
  			var parseFunction = $parse('total | currency');
  			scope.$watch('productPrice', function (newProductPrice) {
  				console.log('New product price: ', newProductPrice);
				var result = parseFunction(scope, {
					total: newProductPrice * 1.16
				});
  				element.text(result);
  			});
  		}
  	}
  })

  .directive('thirdExpressionEval', function ($interpolate) {
  	return {
  		scope: {
  			productPrice: '=productPrice'
  		},
  		link: function (scope, element, attrs) {
  			var interpolateFunction = $interpolate('The total cost is {{total | currency}}');
  			scope.$watch('productPrice', function (newProductPrice) {
  				scope.total = newProductPrice * 1.16;
				var result = interpolateFunction(scope);
  				element.text(result);
  			});
  		}
  	}
  })

  ;
