'use strict';

/**
 * @ngdoc filter
 * @name angularJsProApp.filter:stripe
 * @function
 * @description
 * # stripe
 * Filter in the angularJsProApp.
 */
angular.module('angularJsProApp')
  .filter('stripe', function () {
    return function (input) {
    	if (angular.isString(input)) {
      		return input.split('_').join(' ');
    	}
    	return input;
    };
  });
