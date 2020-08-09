(function() {
  'use strict';

  angular.module("myFirstApp", [])
  .controller("MyFirstController", function ($scope) {
    $scope.name = "Frank";
    $scope.sayHello = function() {
      return "Hello Coursera!";
    };
  });
})();
