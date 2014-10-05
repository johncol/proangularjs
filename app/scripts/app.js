'use strict';

/**
 * @ngdoc overview
 * @name angularJsProApp
 * @description
 * # angularJsProApp
 *
 * Main module of the application.
 */
angular
  .module('angularJsProApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/todo', {
        templateUrl: 'views/todo.html',
        controller: 'TodoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
