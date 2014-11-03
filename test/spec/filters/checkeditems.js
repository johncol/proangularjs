'use strict';

describe('Filter: checkedItems', function () {

  // load the filter's module
  beforeEach(module('angularJsProApp'));

  // initialize a new instance of the filter before each test
  var checkedItems;
  beforeEach(inject(function ($filter) {
    checkedItems = $filter('checkedItems');
  }));
});
