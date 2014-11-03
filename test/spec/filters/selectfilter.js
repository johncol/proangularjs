'use strict';

describe('Filter: selectFilter', function () {

  // load the filter's module
  beforeEach(module('angularJsProApp'));

  // initialize a new instance of the filter before each test
  var selectFilter;
  beforeEach(inject(function ($filter) {
    selectFilter = $filter('selectFilter');
  }));

});
