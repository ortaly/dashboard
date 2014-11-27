'use strict';

describe('Service: Navbarservice', function () {

  // load the service's module
  beforeEach(module('angularDashboardApp'));

  // instantiate service
  var Navbarservice;
  beforeEach(inject(function (_Navbarservice_) {
    Navbarservice = _Navbarservice_;
  }));

  it('should do something', function () {
    expect(!!Navbarservice).toBe(true);
  });

});
