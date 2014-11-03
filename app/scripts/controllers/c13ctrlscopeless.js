'use strict';

/**
 * @ngdoc function
 * @name angularJsProApp.controller:C13ctrlscopelessctrlCtrl
 * @description
 * # C13ctrlscopelessctrlCtrl
 * Controller of the angularJsProApp
 */
angular.module('angularJsProApp')
  .controller('C13ctrlscopelessctrlCtrl', function () {
    this.info = 'test info';
    console.log('this.info: ', this.info);
    this.notifyChange = function() {
    	console.log(new Date() + 'this.info: ', this.info);
    };
  });
