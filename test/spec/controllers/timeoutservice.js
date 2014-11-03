'use strict';

describe('Controller: TimeoutserviceCtrl', function () {

  // load the controller's module
  beforeEach(module('angularJsProApp'));

  var TimeoutserviceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TimeoutserviceCtrl = $controller('TimeoutserviceCtrl', {
      $scope: scope
    });
  }));
});
