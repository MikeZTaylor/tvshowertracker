angular.module('tv shower tracker')
    .factory('Show', function($resource) {
        return $resource('/api/shows/:_id');
    });