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
    'ngTouch',
    'aa.formExtensions'
  ])
  .config(function ($routeProvider, $locationProvider, $logProvider, $interpolateProvider, $httpProvider) {

    console.log('$httpProvider.defaults: ', $httpProvider.defaults);

    // define an interceptor
    // 
    var logInterceptor = function() {
      return {
        request: function (config) {
          console.log('HTTP Request Config: ', config);
          return config;
        },
        response: function (response) {
          console.log('HTTP Response: ', response);
          return response;
        },
        requestError: function(error) {
          console.log('HTTP Request Error: ', error);
        },
        responseError: function(error) {
          console.log('HTTP Response Error: ', error);
        }
      };
    };
    
    $httpProvider.interceptors.push(logInterceptor);

    $interpolateProvider.startSymbol('{{').endSymbol('}}'); // default values

    $logProvider.debugEnabled(true); // default value

    $locationProvider.html5Mode(false); // default value

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/todo', {
        templateUrl: 'views/todo.html',
        controller: 'TodoCtrl'
      })
      .when('/testAngularAgility', {
        templateUrl: 'views/testangularagility.html',
        controller: 'TestangularagilityCtrl'
      })
      .when('/directivetest', {
        templateUrl: 'views/directivetest.html',
        controller: 'DirectiveTestCtrl'
      })
      .when('/chapter10', {
        templateUrl: 'views/chapter10.html',
        controller: 'Chapter10Ctrl'
      })
      .when('/chapter11', {
        templateUrl: 'views/chapter11.html',
        controller: 'Chapter11Ctrl'
      })
      .when('/chapter13', {
        templateUrl: 'views/chapter13.html'
      })
      .when('/C13CtrlInheritance', {
        templateUrl: 'views/c13ctrlinheritance.html',
        controller: 'C13ctrlinheritanceCtrl'
      })
      .when('/C13CtrlScopelessCtrl', {
        templateUrl: 'views/c13ctrlscopelessctrl.html'
      })
      .when('/chapter14', {
        templateUrl: 'views/chapter14.html',
        controller: 'Chapter14Ctrl'
      })
      .when('/chapter15', {
        templateUrl: 'views/chapter15.html',
        controller: 'Chapter15Ctrl'
      })
      .when('/chapter16', {
        templateUrl: 'views/chapter16.html',
        controller: 'Chapter16Ctrl'
      })
      .when('/chapter16scopes', {
        templateUrl: 'views/chapter16scopes.html',
        controller: 'Chapter16scopesCtrl'
      })
      .when('/transclusion', {
        templateUrl: 'views/transclusion.html',
        controller: 'TransclusionCtrl'
      })
      .when('/ctrlsandirectives', {
        templateUrl: 'views/ctrls_and_directives.html',
        controller: 'CtrlsAndDirectivesCtrl'
      })
      .when('/tributton', {
        templateUrl: 'views/tributton.html',
        controller: 'TributtonCtrl'
      })
      .when('/chapter18', {
        templateUrl: 'views/chapter18.html',
        controller: 'Chapter18Ctrl'
      })
      .when('/windowService', {
        templateUrl: 'views/windowservice.html',
        controller: 'WindowserviceCtrl'
      })
      .when('/documentService', {
        templateUrl: 'views/documentservice.html',
        controller: 'DocumentserviceCtrl'
      })
      .when('/timeoutService', {
        templateUrl: 'views/timeoutservice.html',
        controller: 'TimeoutserviceCtrl'
      })
      .when('/intervalService', {
        templateUrl: 'views/intervalservice.html',
        controller: 'IntervalserviceCtrl'
      })
      .when('/locationService/some/sample/path/', {
        templateUrl: 'views/locationservice.html',
        controller: 'LocationserviceCtrl'
      })
      .when('/locationService/', {
        templateUrl: 'views/locationservice.html',
        controller: 'LocationserviceCtrl'
      })
      .when('/exceptionHandlerService', {
        templateUrl: 'views/exceptionhandlerservice.html',
        controller: 'ExceptionhandlerserviceCtrl'
      })
      .when('/sanitize', {
        templateUrl: 'views/sanitize.html',
        controller: 'SanitizeCtrl'
      })
      .when('/parseService', {
        templateUrl: 'views/parseservice.html',
        controller: 'ParseserviceCtrl'
      })
      .when('/compileService', {
        templateUrl: 'views/compileservice.html',
        controller: 'CompileserviceCtrl'
      })
      .when('/httpService', {
        templateUrl: 'views/httpservice.html',
        controller: 'HttpserviceCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
