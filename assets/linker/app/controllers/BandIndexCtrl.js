app.controller('BandIndexCtrl', ['$scope', '$routeParams', 'growl', 'Band', function ($scope, $routeParams, growl, Band) {
  var page = $routeParams.page || 1;

  if ($routeParams.query) {
    $scope.datas = Band.search({page: page, query: $routeParams.query});
    $scope.prevLink = '/bands?q=' + $routeParams.query + '&page=' + ($scope.datas.currentPage - 1);
    $scope.nextLink = '/bands?q=' + $routeParams.query + '&page=' + ($scope.datas.currentPage + 1);
  } else {
    $scope.datas = Band.index({page: page});
    $scope.prevLink = /page/ + ($scope.datas.currentPage - 1);
    $scope.nextLink = /page/ + ($scope.datas.currentPage + 1);
  }
}]);