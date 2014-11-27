'use strict';

describe('Service: Morrisservice', function () {

  // load the service's module
  beforeEach(module('angularDashboardApp'));

  // instantiate service
  var Morrisservice;
  beforeEach(inject(function (_Morrisservice_) {
    Morrisservice = _Morrisservice_;
  }));

  it('should do something', function () {
    expect(!!Morrisservice).toBe(true);
  });

});
