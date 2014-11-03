'use strict';

describe('Controller: Chapter16scopesCtrl', function () {

  // load the controller's module
  beforeEach(module('angularJsProApp'));

  var Chapter16scopesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Chapter16scopesCtrl = $controller('Chapter16scopesCtrl', {
      $scope: scope
    });
  }));
});
