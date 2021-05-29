var myApp=angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', function($log, $scope, $filter, $resource){
    $scope.name='';
    $scope.nomeFormatado=$filter('uppercase')($scope.name);
    $scope.caracter=5;
    $log.info($scope.name);
    $log.info($scope.nomeFormatado);
});

var coisas=[1, "2",
function(){
    console.log("ola");
}];
coisas[2]();
console.log(coisas);
//myApp.controller("mainController",["$log","$scope","$filter","$resource",function(o,e,n,r){e.name="joão",e.nomeFormatado=n("uppercase")(e.name),o.info(e.name),o.info(e.nomeFormatado)}]);

/*
$scope.$watch('name', function(newValue, oldValue){
    console.info('Mudou');
    console.log('old: ' + oldValue);
    console.log('New' + newValue);
});

*/