app.controller('homeCtrl', function($scope, $http) {

  $http({
    method : "GET",
    url : "/data/urls.json"
  }).then(function mySuccess(response) {
    $scope.urlsCount = response.data.urls;
  }, function myError(response) {
    console.log(response);
  });
});