'use strict';

describe('Controller: TributtonCtrl', function () {

  // load the controller's module
  beforeEach(module('angularJsProApp'));

  var TributtonCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TributtonCtrl = $controller('TributtonCtrl', {
      $scope: scope
    });
  }));
});
