'use strict';

/**
 * @ngdoc directive
 * @name angularJsProApp.directive:tableDirective
 * @description
 * # tableDirective
 */
angular.module('angularJsProApp')
  .directive('tableDirective', function ($parse, $filter) {

    var appendTableHeader = function(tableElement, attrsForList) {
        var uppercaseFilter = $filter('uppercase');
        var stripeFilter = $filter('stripe');
        var trElement = angular.element('<tr>');
        angular.forEach(attrsForList, function (attr) {
            trElement.append(angular.element('<th>').text(stripeFilter(uppercaseFilter(attr))));
        });
        tableElement.append(trElement);
    };

    var appendTableDataRow = function(tableElement, attrsForList, rowData) {
        var trElement = angular.element('<tr>');
        angular.forEach(attrsForList, function (attr) {
            trElement.append(angular.element('<td>').text(rowData[attr]));
        });
        tableElement.append(trElement);
    };

    return function (scope, element, attrs) {
        var data = scope[attrs['tableDirective']];
        if (angular.isArray(data)) {
        	var attrsForList = $parse(attrs['directiveAttrName'])(scope);
        	var tableElement = angular.element('<table>').addClass('table table-striped table-bordered');
        	element.append(tableElement);

            appendTableHeader(tableElement, attrsForList);
        	angular.forEach(data, function (item) {
        		appendTableDataRow(tableElement, attrsForList, item);
        	});
        }
    };
  });
