var mainApp = angular.module("myapp", ['ngMaterial']);

mainApp.directive("wingokuDirective", function($log) {
    return {
        restrict : 'A',
        require : "ngModel",
        scope   : {
            wingoku : "="
        },
        link    : function(scope, element, attrs, ngModel) {

                        element.on('focus', function() {
                            // check if the inputField is empty and the required dataArray has at least ONE object
                            if (ngModel.$isEmpty() && scope.wingoku.length > 0) {
                                ngModel.$setUntouched();
                                ngModel.$setValidity();
                            }
                        });
                  }
    }
});
