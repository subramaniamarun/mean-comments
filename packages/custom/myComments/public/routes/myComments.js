(function () {
  'use strict';

  angular
    .module('mean.myComments')
    .config(myComments);

  myComments.$inject = ['$stateProvider'];

  function myComments($stateProvider) {
    $stateProvider.state('myComments example page', {
      url: '/myComments/example',
      templateUrl: 'myComments/views/index.html'
    });
  }

})();
