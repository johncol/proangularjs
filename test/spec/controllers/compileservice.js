'use strict';

describe('Controller: CompileserviceCtrl', function () {

  // load the controller's module
  beforeEach(module('angularJsProApp'));

  var CompileserviceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompileserviceCtrl = $controller('CompileserviceCtrl', {
      $scope: scope
    });
  }));
});
