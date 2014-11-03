'use strict';

/**
 * @ngdoc function
 * @name angularJsProApp.controller:Chapter14Ctrl
 * @description
 * # Chapter14Ctrl
 * Controller of the angularJsProApp
 */
angular.module('angularJsProApp')
  .controller('Chapter14Ctrl', function ($scope) {

  	$scope.sampleDate = new Date();

    $scope.things = [{
    	id: 1,
    	value: 'aaa'
    },{
    	id: 2,
    	value: 'xxx'
    },{
    	id: 3,
    	value: 'bbb'
    },{
    	id: 4,
    	value: 'ccc'
    },{
    	id: 5,
    	value: 'ddd'
    },{
    	id: 6,
    	value: 'eee'
    },{
    	id: 7,
    	value: 'rrr'
    },{
    	id: 8,
    	value: 'ttt'
    },{
    	id: 9,
    	value: 'hhh'
    }];
  });
