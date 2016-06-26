(function () {
  'use strict';

  /* jshint -W098 */
  angular
    .module('mean.myComments')
    .controller('MyCommentsController', MyCommentsController);

  MyCommentsController.$inject = ['$scope', 'Global', 'MyComments'];

  function MyCommentsController($scope, Global, MyComments) {
    $scope.global = Global;
    $scope.package = {
      name: 'myComments'
    };
  }
})();