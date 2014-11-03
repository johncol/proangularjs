'use strict';

/**
 * @ngdoc function
 * @name angularJsProApp.controller:DocumentserviceCtrl
 * @description
 * # DocumentserviceCtrl
 * Controller of the angularJsProApp
 */
angular.module('angularJsProApp')
  .controller('DocumentserviceCtrl', function ($scope, $window, $document) {
    $document.find('.btn-group').on('click', function(event) {
    	event.preventDefault();
    	$window.alert('You like ' + event.target.innerText + ' girls');
    });
  });
