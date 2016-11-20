angular.module('diagramInput', []).directive('diagramInput', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/diagram.html',
        scope: {
            image: '=',
            fields: '=',
            maxWidth: '='
        },
        link: function(scope, element, attr) {
            scope.imageHeight = 0;
            scope.imageWidth = 0;

            console.log(scope.maxWidth);

            scope.$watch(function() {
                var measuredWidth = element[0].firstChild.clientWidth;
                scope.imageWidth = measuredWidth > scope.maxWidth ? scope.maxWidth : measuredWidth;
                scope.imageHeight = element[0].firstChild.clientHeight;

            });

            angular.element(window).on("resize", function() {
                scope.$apply();
            });

            var imageLoader = new Image();
            imageLoader.src = scope.image;
            imageLoader.onload = function() {
                scope.$apply();
            };
        },
		controller: ['$scope', function formBuilderController($scope) {}]
    };
}).directive('diagramInputField', function() {
    return {
        restrict: 'E',
		require:['^diagramInput'],
        templateUrl: 'templates/field.html',
		scope:{
            position: '=',
            imageHeight: '=',
            imageWidth: '='
		},
        link: function(scope, element, attr, controllers) {
            scope.scaledHeight = function() {
                return Math.round(scope.imageHeight * (scope.position.y2 - scope.position.y1));
            };
            scope.scaledWidth = function() {
                return Math.round(scope.imageWidth * (scope.position.x2 - scope.position.x1));
            };
        }
    };
});
