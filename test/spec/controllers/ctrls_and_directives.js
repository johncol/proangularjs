'use strict';

describe('Controller: CtrlsAndDirectivesCtrl', function () {

  // load the controller's module
  beforeEach(module('angularJsProApp'));

  var CtrlsAndDirectivesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CtrlsAndDirectivesCtrl = $controller('CtrlsAndDirectivesCtrl', {
      $scope: scope
    });
  }));
});
