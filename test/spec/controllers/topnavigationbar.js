'use strict';

describe('Controller: TopnavigationbarCtrl', function () {

  // load the controller's module
  beforeEach(module('angularDashboardApp'));

  var TopnavigationbarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TopnavigationbarCtrl = $controller('TopnavigationbarCtrl', {
      $scope: scope
    });
  }));

  it('should check messages exists', function () {
    expect(scope.messages.length).toBeGreaterThan(0);
  });
});
