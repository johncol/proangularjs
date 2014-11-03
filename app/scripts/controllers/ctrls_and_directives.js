'use strict';

var products = [{ name: "Apples", price: 1.20, quantity: 2 },
	{ name: "Bananas", price: 2.42, quantity: 3 },
	{ name: "Pears", price: 2.02, quantity: 1 }];

/**
 * @ngdoc function
 * @name angularJsProApp.controller:CtrlsAndDirectivesCtrl
 * @description
 * # CtrlsAndDirectivesCtrl
 * Controller of the angularJsProApp
 */
angular.module('angularJsProApp')

  .controller('CtrlsAndDirectivesCtrl', function ($scope) {

    $scope.products = products;
    
    $scope.$watch('products', function(newValue, oldValue) {
    	console.log(new Date() + ' Update in products');
    }, true);

    $scope.printProducts = function() { 
    	console.log('$scope.products: ', $scope.products);
    };

  })

  .directive('productItem', function () {
  	return {
  		templateUrl: 'views/templates/productItemTemplate.html',
  		require: '^productTable',
  		link: function (scope, element, attrs, ctrl) {
  			scope.$watch('item.quantity', function() {
  				ctrl.updateTotal();
  			});
  		}
  	};
  })

  .directive('productTable', function () {
  	return {
  		transclude: true,
  		scope: {
  			value: '=productTable',
  			data: '=productData'
  		},
  		controller: function ($scope, $element, $attrs) {
  			this.updateTotal = function () {
  				var total = 0;
  				angular.forEach($scope.data, function (product) {
  					var val = parseInt(product.quantity);
  					total += isNaN(val) ? 0 : val;
  				});
  				$scope.value = total;
  			};
  		}
  	};
  })

  .directive('resetTotal', function () {
  	return {
		templateUrl: 'views/templates/resetTotalTemplate.html',
		scope: {
			data: '=productData'
		},
		require: '^productTable',
		link: function (scope, element, attrs, ctrl) {
			scope.reset = function() {
				angular.forEach(scope.data, function (product) {
					product.quantity = 0;
				});
				ctrl.updateTotal();
			};
		}
  	};
  })

  ;
