angular.module('testFeature')
.component('testFeature', {
  templateUrl: '../testFeature/test-Feature.template.html',
  controller: function testFeatureController() {
    this.input = 'default';
    this.sending = function(currentInput) {
      console.log('Current Input : ', currentInput);
    }
  }
});
