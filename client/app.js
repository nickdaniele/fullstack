
var fullStackApp = angular.module('fullStackApp', []);

fullStackApp.controller('appController', function appController($scope) {
  $scope.test = 'test data';
});
