var app=angular.module('mainApp', []);
app.controller('people', function($scope, $http){
    $http.get('localhost:3000/records')
    .success(function(response){
        $scope.persons=response.records;
    });
});