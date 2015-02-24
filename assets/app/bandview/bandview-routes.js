(function(ng) {
    
    'use strict';

    ng.module('sails-angular-blog')
        .config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider
                .when('/bandviews', '/bandviews/list');

            $stateProvider
                .state('bandviews', {
                    abstract: true,
                    url: '/bandviews',
                    controller: 'BandviewCtrl',
                    template: '<div ui-view></div>',
                    resolve: {
                        BandviewDefinition : function getBandviewDefinition (SailsResourceDefinitions) {
                            return SailsResourceDefinitions.get('bandviews');
                        },
                        Bandviews: function bandviewsListResolve(Restangular) {
                            return Restangular.all('bandviews').getList();
                        }
                    },
                })
                .state('bandviews.list', {
                    url: '/list',
                    templateUrl: 'app/bandview/bandview-list.html'
                })
                .state('bandviews.add', {
                    url: '/add',
                    templateUrl: 'app/bandview/bandview-add-edit.html'
                })
                .state('bandviews.info', {
                    url: '/info/:id',
                    controller: 'SingleBandviewCtrl',
                    templateUrl: 'app/bandview/bandview-info.html'
                })
                .state('bandviews.edit', {
                    url: '/edit/:id',
                    controller: 'SingleBandviewCtrl',
                    templateUrl: 'app/bandview/bandview-add-edit.html'
                });
        });
})(
    window.angular
);
