'use strict';

/**
 * @ngdoc filter
 * @name angularJsProApp.filter:selectFilter
 * @function
 * @description
 * # selectFilter
 * Filter in the angularJsProApp.
 */
angular.module('angularJsProApp')
  .filter('selectFilter', function ($filter) {
    return function (input, nSkip, nLimitTo) {
      var skipFilter = $filter('skip');
      input = skipFilter(input, nSkip);
      var limitToFilter = $filter('limitTo');
      return limitToFilter(input, nLimitTo);
    };
  });
