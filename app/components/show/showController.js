angular.module('app')
    .controller('showController', function ($scope, $http, $sce, $routeParams, $interval, $filter) {
        $scope.pageTitle = 'Shows';
        $scope.message = 'Best Shows Ever';
        $apiUrl = restApiPath + 'shows/' + $routeParams.post_id;
        $http({
            method: 'GET',
            url: $apiUrl
        }).then(function success(response) {
            $scope.show = response.data;
            $scope.initializeClock('clockdiv', $scope.show.acf.show_next_episode);
        }, function error(response) {
            $scope.shows = 'Oh no! Something went wrong';
        });

        $scope.outputHtml = function (stringMarkup) {
            return $sce.trustAsHtml(stringMarkup);
        };
        $scope.calculateEndTime = function (timestamp) {
            var t = Date.parse(timestamp) - new Date().getTime();
            if(t >= 0 ) {
                var seconds = Math.floor((t / 1000) % 60);
                var minutes = Math.floor((t / 1000 / 60) % 60);
                var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
                var days = Math.floor(t / (1000 * 60 * 60 * 24));
                return {
                    'total': t,
                    'days': days,
                    'hours': hours,
                    'minutes': minutes,
                    'seconds': seconds
                };
            } else {
                return 'No Upcoming Episodes, please watch the old ones again.';
            }
        }
        $scope.initializeClock = function(id, timestamp) {
            var clock = document.getElementById(id);
            var timeinterval = setInterval(function () {
                var t = $scope.calculateEndTime(timestamp);
                var isObject = typeof t;
                if( isObject == 'object' ) {
                clock.innerHTML = '<span><span class="time">' + t.days  + '</span>Days</span>' +
                    '<span><span class="time">' + t.hours  + '</span>HRS</span>' +
                    '<span><span class="time">' + t.minutes  + '</span>MINS</span>' +
                    '<span><span class="time">' + t.seconds + '</span>SECS</span>';
                } else {
                    clock.innerHTML = t;
                }
                if (t.total <= 0) {
                    clearInterval(timeinterval);
                }
            }, 1000);
        }
    });