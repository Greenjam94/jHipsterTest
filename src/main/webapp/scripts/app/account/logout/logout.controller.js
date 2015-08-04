'use strict';

angular.module('jhipstertestApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
