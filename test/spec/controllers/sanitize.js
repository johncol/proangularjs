'use strict';

describe('Controller: SanitizeCtrl', function () {

  // load the controller's module
  beforeEach(module('angularJsProApp'));

  var SanitizeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SanitizeCtrl = $controller('SanitizeCtrl', {
      $scope: scope
    });
  }));
});
