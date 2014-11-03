'use strict';

describe('Controller: C13ctrlinheritanceCtrl', function () {

  // load the controller's module
  beforeEach(module('angularJsProApp'));

  var C13ctrlinheritanceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    C13ctrlinheritanceCtrl = $controller('C13ctrlinheritanceCtrl', {
      $scope: scope
    });
  }));
});
