'use strict';

describe('Controller: ParseserviceCtrl', function () {

  // load the controller's module
  beforeEach(module('angularJsProApp'));

  var ParseserviceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ParseserviceCtrl = $controller('ParseserviceCtrl', {
      $scope: scope
    });
  }));
});
