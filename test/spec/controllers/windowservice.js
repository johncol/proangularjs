'use strict';

describe('Controller: WindowserviceCtrl', function () {

  // load the controller's module
  beforeEach(module('angularJsProApp'));

  var WindowserviceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WindowserviceCtrl = $controller('WindowserviceCtrl', {
      $scope: scope
    });
  }));
});
