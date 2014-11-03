'use strict';

describe('Controller: Chapter10Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularJsProApp'));

  var Chapter10Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Chapter10Ctrl = $controller('Chapter10Ctrl', {
      $scope: scope
    });
  }));
});
