(function () {
    "use strict";
    var LunchCheck = angular.module("LunchCheck", []);

    LunchCheck.controller("LunchCheckController", LunchCheckController);
    LunchCheckController.$injector = ['$scope'];
    
    function LunchCheckController($scope) {
        $scope.lunchInput = "";
        $scope.msg = "";
        $scope.styleClass = "";
        
        $scope.verifyList = function () {
            var lunchList = $scope.filter($scope.lunchInput, ",");
            
            if (lunchList.length === 0) {
                $scope.msg = "Please enter data first";
                $scope.styleClass = "error";
            } else if (lunchList.length > 0 && lunchList.length <= 3) {
                $scope.msg = "Enjoy!";
                $scope.styleClass = "success";
            } else {
                $scope.msg = "Too Much!";
                $scope.styleClass = "success";
            }
            
        };
        
        $scope.filter = function (input, splitChar) {
            if (input === '') {
                return [];
            } else {
                return input.split(splitChar);
            }
        };
    }
    
})();