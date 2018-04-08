app.config(function($routeProvider) {
    $routeProvider
    /* home route */
    .when('/', {
        templateUrl : './app/components/home/homeView.html',
        controller : 'homeController'
    })
    /* shows route */
    .when('/shows', {
        templateUrl : './app/components/shows/showsView.html',
        controller  : 'showsController'
    })
    /* single show route */
    .when('/show/:post_id', {
        templateUrl : './app/components/show/showView.html',
        controller : 'showController'
    })
    /* default route */
    .otherwise({
        templateUrl : './app/components/shows/showsView.html',
        controller  : 'showsController'
    })
});