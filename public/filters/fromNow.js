angular.module('tv shower tracker').
filter('fromNow', function() {
    return function(date) {
        return moment(date).fromNow();
    }
});