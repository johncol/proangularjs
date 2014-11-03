'use strict';

describe('Filter: skip', function () {

  // load the filter's module
  beforeEach(module('angularJsProApp'));

  // initialize a new instance of the filter before each test
  var skip;
  beforeEach(inject(function ($filter) {
    skip = $filter('skip');
  }));

});
