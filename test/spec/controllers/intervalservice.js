'use strict';

describe('Controller: IntervalserviceCtrl', function () {

  // load the controller's module
  beforeEach(module('angularJsProApp'));

  var IntervalserviceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IntervalserviceCtrl = $controller('IntervalserviceCtrl', {
      $scope: scope
    });
  }));
});
