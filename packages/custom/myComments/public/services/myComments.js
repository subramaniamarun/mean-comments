(function () {
  'use strict';

  angular
    .module('mean.myComments')
    .factory('MyComments', MyComments);

  MyComments.$inject = [];

  function MyComments() {
    return {
      name: 'myComments'
    };
  }
})();
