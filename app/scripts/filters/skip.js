'use strict';

/**
 * @ngdoc filter
 * @name angularJsProApp.filter:skip
 * @function
 * @description
 * # skip
 * Filter in the angularJsProApp.
 */
angular.module('angularJsProApp')
  .filter('skip', function () {
    return function (input, n) {
      if (angular.isArray(input) && angular.isNumber(n)) {
      	if (n < 1) { 
      		return input;
      	} else if (n > input.length) {
      		return [];
      	}
      	return input.slice(n, input.length);
      }
      return input;
    };
  });
