'use strict';

/**
 * @ngdoc function
 * @name angularJsProApp.controller:SanitizeCtrl
 * @description
 * # SanitizeCtrl
 * Controller of the angularJsProApp
 */
angular.module('angularJsProApp')
  .controller('SanitizeCtrl', function ($scope) {
    $scope.htmlData = '<p>This is <b onmouseover=alert("Attack!")>dangerous</b> data</p>';
  });
