var app = angular.module('myApp', []);
app.controller('AppCtrl', [ '$scope', '$http', function($scope, $http) {
    console.log('hello from angu controller')

    var refresh = function () {
      $http.get('/contactlist').success(function(response){
        console.log('i got data')
        $scope.contactlist = response
        $scope.contact = '';
      })
    }
    refresh();
    $scope.addcontact = function () {
      console.log($scope.contact);
      $http.post('/contactlist', $scope.contact).success(function (response) {
        console.log(response);
        refresh();
      })
    }
    $scope.removecontact= function (id) {
      console.log(id);
      $http.delete('/contactlist/' + id).success(function (response) {
        console.log(response);
        refresh();
      })
    }

}]);
