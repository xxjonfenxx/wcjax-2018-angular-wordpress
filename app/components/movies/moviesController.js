angular.module('app')
    .controller('moviesController', function($scope, coolFactory) {
        $scope.message = 'Look! I am a movie page.';
 });

 app.factory('coolFactory', function() {
     var_dump('do_stuff');
 })