'use strict';

/**
 * @ngdoc function
 * @name angularJsProApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularJsProApp
 */
angular.module('angularJsProApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
