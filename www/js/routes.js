angular.module('app.routes', [])
    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider
            .state('tabsController.home', {
                url: '/home',
                views: {
                    'home': {
                        templateUrl: 'templates/home.html',
                        controller: 'homeCtrl'
                    }
                }
            })
            .state('tabsController.raidplaner', {
                url: '/raidplaner',
                views: {
                    'raidplaner': {
                        templateUrl: 'templates/raidplaner.html',
                        controller: 'raidplanerCtrl'
                    }
                }
            })
            .state('tabsController.roster', {
                url: '/roster',
                views: {
                    'roster': {
                        templateUrl: 'templates/roster.html',
                        controller: 'rosterCtrl'
                    }
                }
            })
            .state('tabsController', {
                url: '/tabs',
                templateUrl: 'templates/tabsController.html',
                abstract: true
            })
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'loginCtrl'
            })

        $urlRouterProvider.otherwise('/tabs/home');

    });