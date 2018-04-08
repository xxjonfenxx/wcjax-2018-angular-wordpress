angular.module('app')
    .controller('navController', function ($scope, $http) {
        var $apiUrl = restApiPath + 'types';
        $http({
            method: 'GET',
            url: $apiUrl
        }).then(function successCallback(response) {
            $scope.allNavItems = response.data;
            }, function errorCallback(response) {
                $scope.shows = 'Oh no! Something went wrong with the nav';
        });
 });