'use strict';

describe('Controller: ExceptionhandlerserviceCtrl', function () {

  // load the controller's module
  beforeEach(module('angularJsProApp'));

  var ExceptionhandlerserviceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExceptionhandlerserviceCtrl = $controller('ExceptionhandlerserviceCtrl', {
      $scope: scope
    });
  }));
});
