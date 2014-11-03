'use strict';

describe('Filter: stripe', function () {

  // load the filter's module
  beforeEach(module('angularJsProApp'));

  // initialize a new instance of the filter before each test
  var stripe;
  beforeEach(inject(function ($filter) {
    stripe = $filter('stripe');
  }));

});
