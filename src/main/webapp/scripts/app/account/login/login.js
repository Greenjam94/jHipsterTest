'use strict';

angular.module('jhipstertestApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('login', {
                parent: 'account',
                url: '/login',
                data: {
                    roles: [], 
                    pageTitle: 'Authentication'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/account/login/login.html',
                        controller: 'LoginController'
                    }
                },
                resolve: {
                    
                }
            });
    });
