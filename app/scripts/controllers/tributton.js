'use strict';

/**
 * @ngdoc function
 * @name angularJsProApp.controller:TributtonCtrl
 * @description
 * # TributtonCtrl
 * Controller of the angularJsProApp
 */
angular.module('angularJsProApp')

  .controller('TributtonCtrl', function ($scope) {

  	$scope.selected = 'Not Sure';

  	$scope.$watch('selected', function (newval, oldval) {
  		console.log('Update from "' + oldval + '" to "' + newval + '"');
  	});

  })

  .directive('triButtonDirective', function () {
  	return {
  		templateUrl: 'views/templates/triButtonTemplate.html',
  		restrict: 'E',
  		replace: true,
  		require: 'ngModel',
  		link: function (scope, element, attrs, ctrl) {

        var setSelected = function(value) {
          var buttons = element.find('button').removeClass('btn-primary');
          angular.forEach(buttons, function(button) {
            button = angular.element(button);
            if (button.text() === value) {
              button.addClass('btn-primary');
            }
          });
        };

        var validateConfidence = function (value) {
          var isValid = value === 'Yes' || value === 'No';
          ctrl.$setValidity('confidence', isValid);
          return value;
        };

  			ctrl.$render = function () {
  				setSelected(ctrl.$viewValue || 'Not Sure');
          validateConfidence(ctrl.$viewValue);
  			};

  			element.find('button').on('click', function (event) {
  				var newSelected = angular.element(event.target).text();
  				setSelected(newSelected);
  				scope.$apply(function () {
  					ctrl.$setViewValue(newSelected);
  				});
  			});

  			ctrl.$formatters.push(function (value) {
  				return value === 'Huu??' ? 'Not Sure' : value;
  			});

        ctrl.$parsers.push(validateConfidence);

  		}
  	};
  })

  ;
