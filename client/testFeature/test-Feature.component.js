angular.module('testFeature')
.component('testFeature', {
  templateUrl: '../testFeature/test-Feature.template.js',
  controller: function testFeatureController() {
    this.message = 'test data';
  }
});