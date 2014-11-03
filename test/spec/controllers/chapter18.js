'use strict';

describe('Controller: Chapter18Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularJsProApp'));

  var Chapter18Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Chapter18Ctrl = $controller('Chapter18Ctrl', {
      $scope: scope
    });
  }));
});
