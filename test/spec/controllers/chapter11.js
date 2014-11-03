'use strict';

describe('Controller: Chapter11Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularJsProApp'));

  var Chapter11Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Chapter11Ctrl = $controller('Chapter11Ctrl', {
      $scope: scope
    });
  }));
});
