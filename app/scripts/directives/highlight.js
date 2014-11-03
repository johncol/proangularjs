'use strict';

angular.module('angularJsProApp').directive('highlight', function () {
	return function (scope, element, attrs) {
		console.log('scope.day: ', scope.day);
		console.log('attrs[class]: ', attrs['class']);
		if (attrs['highlight'] === scope.day) {
			element.css('color', 'red');
		}
	};
});