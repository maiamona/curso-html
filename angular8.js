var app=angular.module('myApp', []);
app.filter('myFormat', function(){
    return function(x){
        var i, c, txt="";
        for(i=0;i<x.length;i++){
            c=x[i];
            if(i%2==0){
                c=c.toUpperCase();
            }
            txt+=c;
        }
        return txt;
    };
});
app.controller('namesCtrl', function($scope){
$scope.names=['Jani', 'Carl', 'Margareth', 'Hege', 'Joe', 'Gustav', 'Birgit', 'Mary', 'Kai']
});

app.controller('myCtrl', function($scope, $location){
$scope.myUrl=$location.absUrl();
});

app.controller('mona', function($scope, $timeout){
$scope.myHeader="Hello Word!";
$timeout(function(){
    $scope.myHeader="How are you today?";
}, 2000);
});

app.controller('menito', function($scope, $interval){
$scope.theTime=new Date().toLocaleTimeString();
$interval(function(){
    $scope.theTime=new Date().toLocaleTimeString();
}, 1000);
});

app.service('hexaf', function(){
    this.myFunc=function(x){
        return x.toString(16);
    }
});
app.controller('mixa', function($scope, hexaf){
    $scope.hex=hexaf.myFunc(255);
});

app.service('hexafy', function(){
    this
})
app.filter('myFormat',['hexafy', function(hexafy){
    return function(x){
        return hexafy.myFunc(x);
    };
}]);