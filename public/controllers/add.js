angular.module('tv shower tracker')
    .controller('AddCtrl', function($scope, $alert, Show) {
        $scope.addShow = function() {
            Show.save({ showName: $scope.showName }).$promise
                .then(function() {
                    $scope.showName = '';
                    $scope.addForm.$setPristine();
                    $alert({
                        content: 'Your show has been added',
                        animation: 'fadeZoomFadeDown',
                        type: 'success',
                        duration: 3
                    });
                })
                .catch(function(response) {
                    $scope.showName = '';
                    $scope.addForm.$setPristine();
                    $alert({
                        content: response.data.message,
                        animation: 'fadeZoomFadeDown',
                        type: 'danger',
                        duration: 3
                    });
                });
        };
    });