app.controller('myCtrl', function($scope){
    $scope.firstName="john";
    $scope.lastName="Doe"
    });

    app.controller('mona', function($scope){
        $scope.firstName="john";
        $scope.changeName=function(){
            $scope.firstName="Nelly";
        }
    });

   