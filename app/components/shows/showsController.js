angular.module('app')
    .controller('showsController', function($scope, $http, $sce, $interval, $timeout) {
        $scope.pageTitle = 'Shows';
        $scope.message = 'Best Shows Ever';
        $apiUrl = restApiPath + 'shows';
        $scope.shows = {};

        $scope.getData = function() {
            $http({
                method: 'GET',
                url: $apiUrl
            }).then(function success(response) {
                    $scope.shows = response.data;
                }, function error(response) {
                    $scope.shows = 'Oh no! Something went wrong';
            });
        }

        $scope.outputHtml = function(stringMarkup) {
            return $sce.trustAsHtml(stringMarkup);
        };

        $scope.refreshShows = function() {
            $interval(function() {
                $timeout(function() {
                    $scope.getData();
                });
            }, 10000 );
        }
        $scope.getData();
        $scope.refreshShows();
 });