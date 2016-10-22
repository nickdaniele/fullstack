angular.module('testFeature')
.component('testFeature', {
  templateUrl: '../testFeature/test-Feature.template.html',
  controller: ['$http',function testFeatureController($http) {
    this.input = 'default';
    this.sending = function(currentInput) {
      console.log('currentInput : ', currentInput);
      $http({
        method: 'POST',
        url: '/test',
        data: JSON.stringify(currentInput)
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          console.log('POST request was a success!');
      }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.log('POST request failed!');
      });
    }
  }]
});
