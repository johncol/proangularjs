'use strict';

/**
 * @ngdoc function
 * @name angularJsProApp.controller:ExceptionhandlerserviceCtrl
 * @description
 * # ExceptionhandlerserviceCtrl
 * Controller of the angularJsProApp
 */
angular.module('angularJsProApp')

  .controller('ExceptionhandlerserviceCtrl', function ($scope, $exceptionHandler) {
  	var counter = 0;
    $scope.throwUnhandledException = function() {
    	throw new Error(++counter + 'th exception thrown.');
    };
    $scope.throwHandledException = function() {
    	try {
    		throw new Error(++counter + 'th exception thrown.');
    	} catch (e) {
			$exceptionHandler(e, 'Error thrown when Button was clicked', 'throwHandledException');
    	}
    };
  })

  // .factory('$exceptionHandler', function ($log) {
  // 	return function (exception, message, method) {
  // 		var exceptionMessage = 'An error has ocurred.';
  // 		if (angular.isDefined(method)) {
  // 			exceptionMessage += ' Method: ' + method;
  // 		}
  // 		if (angular.isDefined(message)) {
  // 			exceptionMessage += ' Description: ' + message;
  // 		}
	 //  	$log.debug(exceptionMessage);
  // 		$log.error(exception);
  // 	};
  // })

  ;
