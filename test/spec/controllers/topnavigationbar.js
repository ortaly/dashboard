'use strict';

describe('Controller: TopnavigationbarCtrl', function () {

  // load the controller's module
  beforeEach(module('angularDashboardApp'));

  var TopnavigationbarcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TopnavigationbarCtrl = $controller('TopnavigationbarCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
