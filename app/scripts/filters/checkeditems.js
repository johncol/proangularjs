'use strict';

/**
 * @ngdoc filter
 * @name angularJsProApp.filter:checkedItems
 * @function
 * @description
 * # checkedItems
 * Filter in the angularJsProApp.
 */
angular.module('angularJsProApp')
  .filter('checkedItems', function () {
    return function (items, showCompleteItems) {
    	if (showCompleteItems) {
    		return items;
    	}
    	var filteredItems = [];
    	angular.forEach(items, function(item){
    		if (!item.done) {
    			filteredItems.push(item);
    		}
    	});
        return filteredItems;
    };
  });
