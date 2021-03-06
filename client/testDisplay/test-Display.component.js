angular.module('testDisplay')
.component('testDisplay', {
  templateUrl: '../testDisplay/test-Display.template.html',
  controller: ['$http', function testDisplayController($http) {
    this.displayed = ['Push Button to Load'];

    this.receiving = function() {
      $http({
        url: 'http://localhost:3000/test',
        method: 'GET'
      }).then(function successCallback(response) {
        this.displayed = [JSON.parse(response.data[0]['stuff'])];
        console.log(this.displayed);
      }, function errorCallback(response) {
        console.log('Somehing went wrong with GET Request');
      })
    }
  }]
});
