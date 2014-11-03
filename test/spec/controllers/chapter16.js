'use strict';

describe('Controller: Chapter16Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularJsProApp'));

  var Chapter16Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Chapter16Ctrl = $controller('Chapter16Ctrl', {
      $scope: scope
    });
  }));
});
