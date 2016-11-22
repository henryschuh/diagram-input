angular.module('diagramInput', []).directive('diagramInput', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/diagram.html',
        scope: {
            schema: '=',
            inputs: '=',
            model: '=',
            image: '=',
            maxWidth: '=',
            disabled: '=',
            debounce: '='
        },
        link: function(scope, element, attr) {
            scope.imageHeight = 0;
            scope.imageWidth = 0;

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
            properties: '=',
            formElement: '=',
            model: '=',
            imageHeight: '=',
            imageWidth: '=',
            disabled: '=',
            debounce: '='
		},
        link: function(scope, element, attr, controllers) {
            var maxCharWidth = 8;

            scope.fontScaleFactor = function(str) {
                var scaling = 1;
                while(str && ((str.length * maxCharWidth * scaling) > scope.imageWidth * (scope.formElement.x2 - scope.formElement.x1)))
                    scaling *= 0.9;
                return scaling;
            };

            scope.scaledHeight = function() {
                return Math.round(scope.imageHeight * (scope.formElement.y2 - scope.formElement.y1));
            };
            scope.scaledWidth = function() {
                return Math.round(scope.imageWidth * (scope.formElement.x2 - scope.formElement.x1));
            };
        }
    };
});
