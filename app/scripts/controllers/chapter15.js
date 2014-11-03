'use strict';

var people = [{'id':1,'first_name':'Catherine','last_name':'Sanders','email':'csanders0@privacy.gov.au','country':'United Kingdom','ip_address':'88.70.111.103','profits':'979852.92'},
{'id':2,'first_name':'Raymond','last_name':'Johnson','email':'rjohnson1@columbia.edu','country':'Chile','ip_address':'130.82.129.107','profits':'885002.54'},
{'id':3,'first_name':'Clarence','last_name':'Hayes','email':'chayes2@google.cn','country':'Czech Republic','ip_address':'32.99.107.206','profits':'23073.30'},
{'id':4,'first_name':'Ryan','last_name':'Reyes','email':'rreyes3@so-net.ne.jp','country':'United States','ip_address':'228.165.84.55','profits':'764031.75'},
{'id':5,'first_name':'Denise','last_name':'Day','email':'dday4@live.com','country':'Russia','ip_address':'71.46.109.162','profits':'192056.67'},
{'id':6,'first_name':'Albert','last_name':'Carroll','email':'acarroll5@ask.com','country':'United States','ip_address':'237.199.92.118','profits':'402783.20'}];

/**
 * @ngdoc function
 * @name angularJsProApp.controller:Chapter15Ctrl
 * @description
 * # Chapter15Ctrl
 * Controller of the angularJsProApp
 */
angular.module('angularJsProApp')
  .controller('Chapter15Ctrl', function ($scope) {
    $scope.people = people;
    $scope.increaseProfits = function() {
    	angular.forEach($scope.people, function (person) {
    		person.profits++;
    	});
    };
  });
