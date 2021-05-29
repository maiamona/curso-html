var myApp=angular.module('myApp', []);
myApp.controller('mainController', function($scope, $http){
    $http.get('an.html')
    .then(function(response){
        $scope.minhamensagem=response.data
    });
});