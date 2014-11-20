'use strict';

/**
 * @ngdoc function
 * @name angularDashboardApp.controller:TopnavigationbarCtrl
 * @description
 * # TopnavigationbarCtrl
 * Controller of the angularDashboardApp
 */
angular.module('angularDashboardApp')
  .controller('TopnavigationbarCtrl', function ($scope) {
    $scope.name = 'TIKAL DASHBOARD';
	$scope.messages = [
		{name:"John Smith", received:"Yesterday", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend..."},
		{name:"Tal Cohen", received:"11/11/14", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend..."},
		{name:"Lital Dahan", received:"10/11/14", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend..."}
	];
	$scope.tasks = [
		{name: "task 1", complete:"40", class:"progress-bar-success"},
		{name: "task 2", complete:"20", class:"progress-bar-info"},
		{name: "task 3", complete:"60", class:"progress-bar-warning"},
		{name: "task 4", complete:"80", class:"progress-bar-danger"}
	];
	$scope.alerts = [
		{name: "New Comment", received:"4 minutes ago", class:"fa-comment"},
		{name: "New Followers", received:"12 minutes ago", class:"fa-twitter"},
		{name: "Message Sent", received:"4 minutes ago", class:"fa-envelope"},
		{name: "New Task", received:"4 minutes ago", class:"fa-tasks"},
		{name: "Server Rebooted", received:"4 minutes ago", class:"fa-upload"}
	]
  });
