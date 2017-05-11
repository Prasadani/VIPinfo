// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

var db = null;

angular.module('starter', ['ionic', 'starter.controllers', 'ionic-material', 'ionMdInput', 'ngCordova'])

.run(function($ionicPlatform, $cordovaSQLite) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
        db = $cordovaSQLite.openDB("my.db");
        $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS people (id integer primary key, firstname text, lastname text)");
    });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(0);

    /*
    // Turn off back button text
    $ionicConfigProvider.backButton.previousTitleText(false);
    */

    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.map', {
        url: '/map',
        views: {
            'menuContent': {
                templateUrl: 'templates/map.html',
                controller: 'MapCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })

    .state('app.activity', {
        url: '/activity',
        views: {
            'menuContent': {
                templateUrl: 'templates/activity.html',
                controller: 'ActivityCtrl'
            },
            'fabContent': {
                template: '<button id="fab-activity" class="button button-fab button-fab-bottom-right expanded button-energized-900 flap"><i class="icon ion-paper-airplane"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 200);
                }
            }
        }
    })

    .state('app.addInfo', {
        url: '/addInfo',
        views: {
            'menuContent': {
                templateUrl: 'templates/addInfo.html',
                controller: 'AddInfoCtrl'
            },
            'fabContent': {
                /*
                template: '<button ui-sref="app.map" id="fab-addInfo" class="button button-fab button-fab-bottom-right expanded button-energized-900 spin"><i class="icon ion-map"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-addInfo').classList.toggle('on');
                    }, 900);
                }
                */
            }
        }
    })

    .state('app.gallery', {
        url: '/gallery',
        views: {
            'menuContent': {
                templateUrl: 'templates/gallery.html',
                controller: 'GalleryCtrl'
            },
            'fabContent': {
                template: '<button id="fab-gallery" class="button button-fab button-fab-bottom-right expanded button-energized-900 drop"><i class="icon ion-heart"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-gallery').classList.toggle('on');
                    }, 600);
                }
            }
        }
    })

    .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })

    .state('app.profile', {
        url: '/profile',
        views: {
            'menuContent': {
                templateUrl: 'templates/profile.html',
                controller: 'ProfileCtrl'
            },
            'fabContent': {
                template: '<button ui-sref="app.map" id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-map"></i></button>',
                controller: function ($timeout) {
                    /*$timeout(function () {
                        document.getElementById('fab-profile').classList.toggle('on');
                    }, 800);*/
                }
            }
        }
    })

    .state('app.places', {
        url: '/places',
        views: {
            'menuContent': {
                templateUrl: 'templates/places.html',
                controller: 'PlacesCtrl'
            },
            'fabContent': {
                template: '<button ui-sref="app.map" id="fab-infos" class="button button-fab button-fab-bottom-right expanded button-energized-900 spin"><i class="icon ion-map"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-infos').classList.toggle('on');
                    }, 900);
                }
            }
        }
    })  

    .state('app.place', {
        url: '/place',
        views: {
            'menuContent': {
                templateUrl: 'templates/place.html',
                controller: 'PlaceCtrl'
            },
            'fabContent': {
                template: '<button ui-sref="app.map" id="fab-info" class="button button-fab button-fab-bottom-right expanded button-energized-900 spin"><i class="icon ion-map"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-info').classList.toggle('on');
                    }, 900);
                }
            }
        }
    })    
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/login');
});
