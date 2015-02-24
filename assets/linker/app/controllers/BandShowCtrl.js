app.controller('BandShowCtrl', ['$scope', '$routeParams', '$location', 'growl', 'Post', function ($scope, $routeParams, $location, growl, Post) {
  
 //var id = $routeParams.id || 1;
 //var id = "54ad4adce78c46401719ce71";
 var id = '54ac55e5eea68000d7741113';
 $scope.datas = Post.show({id: id});

}]);