'use strict';

describe('Controller: LocationserviceCtrl', function () {

  // load the controller's module
  beforeEach(module('angularJsProApp'));

  var LocationserviceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LocationserviceCtrl = $controller('LocationserviceCtrl', {
      $scope: scope
    });
  }));
});
