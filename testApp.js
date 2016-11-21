var app = angular.module('DiagramInputTest', ['diagramInput']);

app.controller('TestCtrl', function($scope, $http, $location) {
    $scope.testSchema = {
      fields: {
        properties: {
          "Measurements_M1": {
            type: "number",
            required: true,
            min: 0,
            max: 100
          },
          "Measurements_M2": {
            type: "number",
            required: true,
            min: 0,
            max: 200
          },
          "Measurements_M3": {
            type: "number",
            required: true,
            min: 0,
            max: 300
          }
        }
      },
      form: [
        {
          type: "diagram",
          image: "test_assets/diagram.png",
          maxWidth: 800,
          items: [
            {
              key: "Measurements_M1",
              "x1": 0.083,
              "y1": 0.39,
              "x2": 0.186,
              "y2": 0.476
            },
            {
              key: "Measurements_M2",
              "x1": 0.772,
              "y1": 0.303,
              "x2": 0.876,
              "y2": 0.392
            },
            {
              key: "Measurements_M3",
              "x1": 0.578,
              "y1": 0.64,
              "x2": 0.684,
              "y2": 0.729
            },
            
          ]
        }
      ]
    }

    $scope.testModel = {};

    /*$scope.testFields = [
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
    ];*/
});
