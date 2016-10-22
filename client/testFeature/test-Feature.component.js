angular.module('testFeature')
.component('testFeature', {
  templateUrl: '../testFeature/test-Feature.template.html',
  controller: function testFeatureController() {
    this.message = 'test data';
  }
});
