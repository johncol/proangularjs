'use strict';

describe('Controller: Chapter14Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularJsProApp'));

  var Chapter14Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Chapter14Ctrl = $controller('Chapter14Ctrl', {
      $scope: scope
    });
  }));
});
