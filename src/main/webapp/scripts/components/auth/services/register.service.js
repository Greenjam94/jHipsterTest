'use strict';

angular.module('jhipstertestApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


