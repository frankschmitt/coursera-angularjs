(function() {
  'use strict';

  angular.module("NameCalculator", [])
  .controller("NameCalculatorController", function ($scope) {
    $scope.name = "";
    $scope.totalValue = 0;

    $scope.displayNumeric = function() {
      var totalNameValue = calculateNumericForString($scope.name);
      $scope.totalValue = totalNameValue;
    };
  });


  function calculateNumericForString(s) {
    var totalStringValue = 0;
    for (var i = 0; i < s.length; i++) {
      totalStringValue += s.charCodeAt(i);
    }
    return totalStringValue;
  };
})();
