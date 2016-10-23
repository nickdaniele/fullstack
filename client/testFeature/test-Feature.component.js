angular.module('testFeature')
.component('testFeature', {
  templateUrl: '../testFeature/test-Feature.template.html',
  controller: ['$http',function testFeatureController($http) {
    this.input = 'default';
    this.sending = function(currentInput) {
      $http({
        url: 'http://localhost:3000/test',
        dataType: 'json',
        method: 'POST',
        data: { test: JSON.stringify(currentInput) },
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          console.log(response);
      }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.log('Angular: POST request failed');
      });
    }
  }]
});
