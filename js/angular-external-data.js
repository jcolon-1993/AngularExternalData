function TimetableCtrl($scope, $http)
{
  /* The path to the JSON file is relative to the HTML
  template*/
  $http.get("js/items.json")
    /* If the request successfully fetches data, the code
    in the success() function runs */
    .success(function(data) { $scope.sessions = data.sessions; })
    /* If it fails, the error() function is run instead. This
    would to show an error message to users  */
    .error(function(data) { alert("Page timed out") });
}
