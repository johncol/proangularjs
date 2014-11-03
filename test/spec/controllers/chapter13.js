'use strict';

describe('Controller: Chapter13Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularJsProApp'));

  var Chapter13Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Chapter13Ctrl = $controller('Chapter13Ctrl', {
      $scope: scope
    });
  }));
});
