(function(ng, _) {

    'use strict';

    ng.module('sails-angular-blog')
        .controller('BandviewCtrl', BandviewCtrl)
        .controller('SingleBandviewCtrl', SingleBandviewCtrl);

    function BandviewCtrl($scope, $state, Bandviews, BandviewDefinition, SailsResourceService) {
        var resourceService = new SailsResourceService('bandviews'.toLowerCase());
        
        $scope.bandviews = Bandviews;
        $scope.model_def = BandviewDefinition.originalElement;
        $scope.bandview = {};

        $scope.remove = function remove(bandview) {
            bandview = bandview || $scope.bandview;
            if (window.confirm('Are you sure you want to delete this bandview?')) {
                return resourceService.remove(bandview, $scope.bandviews);
            }
        };

        $scope.save = function save(bandview) {
            bandview = bandview || $scope.bandview;
            return resourceService.save(bandview, $scope.bandviews)
                .then(function() {
                    $state.go('^.list');
                }, function(err) {
                    console.error('An error occured: ' + err);
                });
        };
    }

    function SingleBandviewCtrl($scope, $stateParams, Bandviews, BandviewDefinition) {
        // coerce string -> int
        $stateParams.id = _.parseInt($stateParams.id);
        if (!_.isNaN($stateParams.id)) {
            $scope.bandview = _.find(Bandviews, {
                id: $stateParams.id
            });
        }
    }

})(
    window.angular,
    window._
);
