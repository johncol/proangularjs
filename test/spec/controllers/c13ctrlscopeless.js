'use strict';

describe('Controller: C13ctrlscopelessctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('angularJsProApp'));

  var C13ctrlscopelessctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    C13ctrlscopelessctrlCtrl = $controller('C13ctrlscopelessctrlCtrl', {
      $scope: scope
    });
  }));
});
