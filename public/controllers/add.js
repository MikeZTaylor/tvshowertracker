angular.module('tv shower tracker')
    .controller('AddCtrl', function($scope, $alert, Show) {
        $scope.addShow = function() {
            Show.save({ showName: $scope.showName }).$promise
                .then(function() {
                    $scope.showName = '';
                    $scope.addForm.$setPristine();
                    $alert({
                        content: 'your show has been added.',
                        animation: 'fadeZoomFadeDown',
                        type: 'info',
                        duration: 3
                    });
                })
                .catch(function(response) {
                    $scope.showName = '';
                    $scope.addForm.$setPristine();
                    $alert({
                        content: response.data.message,
                        animation: 'fadeZoomFadeDown',
                        type: 'warning',
                        duration: 3
                    });
                });
        };
    });