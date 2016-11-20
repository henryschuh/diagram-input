var app = angular.module('DiagramInputTest', ['diagramInput']);

app.controller('TestCtrl', function($scope, $http, $location) {
    $scope.testFields = [
      {
        "x1": 0.083,
        "y1": 0.39,
        "x2": 0.186,
        "y2": 0.476
      },
      {
        "x1": "0.772",
        "y1": "0.303",
        "x2": "0.876",
        "y2": "0.392"
      },
      {
        "x1": "0.578",
        "y1": "0.64",
        "x2": "0.684",
        "y2": "0.729"
      }
    ];
});
