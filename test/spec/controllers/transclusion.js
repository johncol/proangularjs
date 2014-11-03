'use strict';

describe('Controller: TransclusionCtrl', function () {

  // load the controller's module
  beforeEach(module('angularJsProApp'));

  var TransclusionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TransclusionCtrl = $controller('TransclusionCtrl', {
      $scope: scope
    });
  }));
});
