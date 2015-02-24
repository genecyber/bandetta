app.controller('BandViewCtrl', ['$scope', '$routeParams', 'growl', 'Band', function ($scope, $routeParams, growl, Band) {
  var page = $routeParams.page || 1;

    $scope.datas = Band.search({page: page, id: $routeParams.id});
  
}]);