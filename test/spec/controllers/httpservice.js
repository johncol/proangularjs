'use strict';

describe('Controller: HttpserviceCtrl', function () {

  // load the controller's module
  beforeEach(module('angularJsProApp'));

  var HttpserviceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HttpserviceCtrl = $controller('HttpserviceCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
