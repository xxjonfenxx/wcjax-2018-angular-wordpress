angular.module('app')
    .controller('homeController', function($scope, coolService) {
        $scope.message = 'Look! I am a home page.';
        coolService.coolStuff();
 });

 app.service('coolService', function() {
     this.coolStuff = function() {     
         console.log('do_stuff');
     }
 })