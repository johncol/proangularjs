'use strict';

describe('Controller: DocumentserviceCtrl', function () {

  // load the controller's module
  beforeEach(module('angularJsProApp'));

  var DocumentserviceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DocumentserviceCtrl = $controller('DocumentserviceCtrl', {
      $scope: scope
    });
  }));
});
