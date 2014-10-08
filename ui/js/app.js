'use strict';

// declare top-level module which depends on filters,and services
var myApp = angular.module('myApp',
    [   'myApp.filters',
        'myApp.directives', // custom directives
        'ngGrid', // angular grid
        'ui', // angular ui
        'ngSanitize', // for html-bind in ckeditor
        'ui.ace', // ace code editor
        'ui.bootstrap', // jquery ui bootstrap
        '$strap.directives' // angular strap
    ]);


var filters = angular.module('myApp.filters', []);
var directives = angular.module('myApp.directives', []);

// bootstrap angular
myApp.config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {

    // TODO use html5 *no hash) where possible
    // $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl:'partials/home.html'
    });
    $routeProvider.when('/fs2', {
        templateUrl:'partials/fs2/fs2.html',
        controller: 'FS2Controller'
    });
    $routeProvider.when('/vision', {
        templateUrl:'partials/vision.html'
    });
    $routeProvider.when('/pastor', {
        templateUrl:'partials/pastor.html'
    });
    $routeProvider.when('/leadership', {
        templateUrl:'partials/leadership.html'
    });
    $routeProvider.when('/gallery', {
        templateUrl:'partials/gallery.html'
    });
    $routeProvider.when('/cellgroups', {
        templateUrl:'partials/cellgroups.html'
    });
    $routeProvider.when('/sundayschool', {
        templateUrl:'partials/sundayschool.html'
    })
    $routeProvider.when('/women', {
        templateUrl:'partials/women.html'
    });
    $routeProvider.when('/youth', {
        templateUrl:'partials/youth.html'
    });
    $routeProvider.when('/donate', {
        templateUrl:'partials/donate.html'
    });
    $routeProvider.when('/prayer', {
        templateUrl:'partials/prayer.html'
    });
    $routeProvider.when('/sermons', {
        templateUrl:'partials/sermons.html'
    })
    $routeProvider.when('/blog', {
        templateUrl:'partials/blog.html'
    });
    $routeProvider.when('/links', {
        templateUrl:'partials/links.html'
    });
    $routeProvider.when('/volunteer', {
        templateUrl:'partials/volunteer.html'
    });
    $routeProvider.when('/missions', {
        templateUrl:'partials/missions.html'
    });
    $routeProvider.when('/contact', {
        templateUrl:'partials/contact.html'
    })
    
    // by default, redirect to site root
    $routeProvider.otherwise({
        redirectTo:'/'
    });

}]);



