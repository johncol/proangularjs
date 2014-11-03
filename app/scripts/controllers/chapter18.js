'use strict';

/**
 * @ngdoc function
 * @name angularJsProApp.controller:Chapter18Ctrl
 * @description
 * # Chapter18Ctrl
 * Controller of the angularJsProApp
 */
angular.module('angularJsProApp')

  .controller('Chapter18Ctrl', function ($scope, sampleFactory, sampleService, sampleProvider, loggProvider) {
    $scope.data = {
    	totalClicks: 0,
    	cities: [
    		'Bogota',
    		'Medellin',
    		'Barranquilla',
    		'Pereira',
    		'Cali',
    	]
    };
    $scope.$watch('data.totalClicks', function (newVal) {
    	loggProvider.log('Clicks value updated: ' + newVal);
    });
    sampleFactory.logCalls('first call');
    sampleFactory.logCalls('second call');
    sampleService.logCalls('first call');
    sampleService.logCalls('second call');
    sampleProvider.logCalls('first call');
    sampleProvider.logCalls('second call');
  })

  .directive('lotsOfButtons', function (sampleFactory, sampleService, sampleProvider, loggProvider) {
    sampleFactory.logCalls('first call in directive');
    sampleFactory.logCalls('second call in directive');
    sampleService.logCalls('first call in directive');
    sampleService.logCalls('second call in directive');
    sampleProvider.logCalls('first call in directive');
    sampleProvider.logCalls('second call in directive');
  	return {
  		template: '<button class="btn btn-default" ng-repeat="item in list">{{item}}</button>',
  		restrict: 'A',
  		scope: {
  			numerOfClicks: '=clicks',
  			list: '=source'
  		},
  		link: function (scope, element, attrs) {
  			element.on('click', function (event) {
  				loggProvider.log('You clicked on: ' + event.target.innerText);
  				element.find('button').removeClass('btn-primary');
  				angular.element(event.target).addClass('btn-primary');
  				scope.$apply(function () {
  					scope.numerOfClicks++;
  				});
  			});
  		}
  	};
  })

  .factory('sampleFactory', function () {
  	var numOfCalls = 0;
  	return {
  		logCalls: function (message) {
  			console.log('SampleFactoryCall#' + ++numOfCalls + '. Message: ', message);
  		}
  	};
  })

  .service('sampleService', function () {
  	var numOfCalls = 0;
	this.logCalls = function (message) {
		console.log('SampleServiceCall#' + ++numOfCalls + '. Message: ', message);
	};
  })

  .provider('sampleProvider', function () {
  	var numOfCalls = 0;
  	return {
  		$get: function () {
  			return {
		  		logCalls: function (message) {
		  			console.log('SampleProviderCall#' + ++numOfCalls + '. Message: ', message);
		  		}
  			};
  		}
  	};
  })

  .provider('loggProvider', function () {
  	var dev = true;
  	return {
  		developmentEnvironment: function (setting) {
  			if (angular.isDefined(setting)) {
  				dev = setting;
  				return this;
  			}
  			return dev;
  		},
  		$get: function () {
  			return {
  				log: function (message) {
  					var level = dev ? 'DEVELOPMENT' : 'PRODUCTION';
  					console.log('(' + level + '):', message);
  				}
  			}
  		}
  	};
  })

  ;
