angular.module('myApp.controllers')
    .controller('DemoCtrl', ['$scope', function($scope){
      $scope.title = "DemoCtrl";
      $scope.d3Data = [
        {name: "Me", score:1}
      ];
      $scope.d3OnClick = function(item){
        item.score++;
      };
    }]);