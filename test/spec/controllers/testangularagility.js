'use strict';

describe('Controller: TestangularagilityCtrl', function () {

  // load the controller's module
  beforeEach(module('angularJsProApp'));

  var TestangularagilityCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestangularagilityCtrl = $controller('TestangularagilityCtrl', {
      $scope: scope
    });
  }));
});
