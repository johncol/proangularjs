'use strict';

/**
 * @ngdoc directive
 * @name angularJsProApp.directive:directiveTestCh14
 * @description
 * # directiveTestCh14
 */
angular.module('angularJsProApp')
  .directive('directiveTest', function () {
    return function (scope, element, attrs) {
        var data = scope[attrs['directiveTest']];
        if (angular.isArray(data)) {
            var expressionForValue = attrs['directiveAttrName'];
            var ulElement = angular.element('<ul>').addClass('list-group');
            angular.forEach(data, function (item) {
                var value = scope.$eval(expressionForValue, item);
                var liElement = angular.element('<li>').text(value).addClass('list-group-item');
                ulElement.append(liElement);
            });
            element.append(ulElement);
        }
    };
  });

angular.module('angularJsProApp')
  .directive('directiveTestWithWatch', function () {
    return function (scope, element, attrs) {
        var data = scope[attrs['directiveTestWithWatch']];
        if (angular.isArray(data)) {
            var expressionForValue = attrs['directiveAttrName'];
            var ulElement = angular.element('<ul>').addClass('list-group');
            angular.forEach(data, function (item) {
                var liElement = angular.element('<li>').addClass('list-group-item');
                ulElement.append(liElement);
                var watchFn = function(scopeWn) {
                    return scopeWn.$eval(expressionForValue, item);
                };
                scope.$watch(watchFn, function (newValue, oldValue) {
                    liElement.text(newValue);
                });
            });
            element.append(ulElement);
        }
    };
  });
