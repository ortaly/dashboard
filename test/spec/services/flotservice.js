'use strict';

describe('Service: Flotservice', function () {

  // load the service's module
  beforeEach(module('angularDashboardApp'));

  // instantiate service
  var Flotservice;
  beforeEach(inject(function (_Flotservice_) {
    Flotservice = _Flotservice_;
  }));

  it('should do something', function () {
    expect(!!Flotservice).toBe(true);
  });

});
