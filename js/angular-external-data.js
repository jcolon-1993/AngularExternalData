function TimetableCtrl($scope, $http)
{
  $http.get("js/items.json")
    .success(function(data) { $scope.sessions = data.sessions; })
    .error(function(data) { alert("Page timed out") });
}