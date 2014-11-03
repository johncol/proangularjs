'use strict';

describe('Controller: Chapter15Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularJsProApp'));

  var Chapter15Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Chapter15Ctrl = $controller('Chapter15Ctrl', {
      $scope: scope
    });
  }));
});
