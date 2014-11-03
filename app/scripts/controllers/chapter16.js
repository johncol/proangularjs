'use strict';

var people = [{'id':1,'first_name':'Catherine','last_name':'Sanders','email':'csanders0@privacy.gov.au','country':'United Kingdom','ip_address':'88.70.111.103','profits':'979852.92'},
{'id':2,'first_name':'Raymond','last_name':'Johnson','email':'rjohnson1@columbia.edu','country':'Chile','ip_address':'130.82.129.107','profits':'885002.54'},
{'id':3,'first_name':'Albert','last_name':'Carroll','email':'acarroll5@ask.com','country':'United States','ip_address':'237.199.92.118','profits':'402783.20'}];

/**
 * @ngdoc function
 * @name angularJsProApp.controller:Chapter16Ctrl
 * @description
 * # Chapter16Ctrl
 * Controller of the angularJsProApp
 */
angular.module('angularJsProApp')
  
  .controller('Chapter16Ctrl', function ($scope) {
    $scope.people = people;
  })
  
  .directive('restrictExampleDirective', function () {
  	return {
  		restrict: 'AE',
  		link: function (scope, element, attrs) {
  			var data = scope[attrs['restrictExampleDirective'] || attrs['list']];
  			if (angular.isArray(data)) {
  				var ulElement = angular.element('<ul>').addClass('list-group');
  				element.append(ulElement);
  				angular.forEach(data, function (person) {
  					var liElement = angular.element('<li>').addClass('list-group-item').text(person.first_name);
  					ulElement.append(liElement);
  				});
  			}
  		}
  	};
  })

  .directive('templateExampleDirective', function () {
  	return {
  		restrict: 'A',
  		template: ''
  			+'<ul class="list-group">'
			+	'<li ng-repeat="directiveDataItem in directiveData" class="list-group-item">{{directiveDataItem.first_name}}</li>'
  			+'</ul>',
  		link: function (scope, element, attrs) {
  			scope.directiveData = scope[attrs['templateExampleDirective']];
  		}
  	};
  })

  .directive('templateUrlExampleDirective', function () {
  	return {
  		restrict: 'A',
  		templateUrl: 'views/templates/templateUrlExampleDirective.html',
  		link: function (scope, element, attrs) {
  			scope.directiveData = scope[attrs['templateUrlExampleDirective']];
  		}
  	};
  })

  .directive('templateUrlExampleDirectiveTwo', function () {
  	return {
  		restrict: 'A',
  		templateUrl: function (element, attrs) {
  			return attrs['viewType'] !== 'table' ? 
  				'views/templates/templateUrlExampleDirective.html' :
  				'views/templates/templateUrlExampleDirective2.html';
  		},
  		link: function (scope, element, attrs) {
  			scope.directiveData = scope[attrs['templateUrlExampleDirectiveTwo']];
  		}
  	};
  })

  .directive('templateUrlExampleDirectiveWithReplace', function () {
  	return {
  		restrict: 'A',
  		replace: true,
  		scope: true,
  		templateUrl: 'views/templates/templateUrlExampleDirective2.html',
  		link: function (scope, element, attrs) {
  			scope.directiveData = scope[attrs['templateUrlExampleDirectiveWithReplace']];
  		}
  	};
  })


  ;
