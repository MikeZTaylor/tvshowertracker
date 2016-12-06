angular.module('tv shower tracker')
    .controller('NavbarCtrl', function($scope, Auth) {
        $scope.logout = function() {
            Auth.logout();
        };
    });