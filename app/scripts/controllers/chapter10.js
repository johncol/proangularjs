'use strict';

/**
 * @ngdoc function
 * @name angularJsProApp.controller:Chapter10Ctrl
 * @description
 * # Chapter10Ctrl
 * Controller of the angularJsProApp
 */
angular.module('angularJsProApp')
  .controller('Chapter10Ctrl', function ($scope) {
    $scope.p1 = 'Asereje-ja-deje..';
    $scope.todo = [{
	    	action: 'live',
	    	done: 'yes'
	    },{
	    	action: 'eat',
	    	done: 'no'
	    },{
	    	action: 'shit',
	    	done: 'no'
	    },{
	    	action: 'fuck',
	    	done: 'yes'
	    },{
	    	action: 'die',
	    	done: 'yes'
	    }];
    
  });
