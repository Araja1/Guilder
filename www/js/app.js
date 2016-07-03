// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'ngCordova', 'app.controllers', 'app.routes', 'app.services', 'app.directives', 'app.filters'])
    .run(['$ionicPlatform', '$rootScope', '$cordovaSQLite', 'NewsService', function ($ionicPlatform, $rootScope, $cordovaSQLite, NewsService) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
            if (window.cordova) {
                $rootScope.db = $cordovaSQLite.openDB({
                    name: 'my.db',
                    location: 'default'
                }); //device
            } else {
                $rootScope.db = window.openDatabase('my.db', '1', 'my', 1024 * 1024 * 100); // browser
            }

            $cordovaSQLite.execute($rootScope.db, 'CREATE TABLE IF NOT EXISTS News (id INTEGER PRIMARY KEY AUTOINCREMENT, guildId VARCHAR(50), title VARCHAR(128), img BLOP, text VARCHAR(128), icon VARCHAR(50), date VARCHAR(128), author VARCHAR(50))');
            NewsService.connectToDatabase();
            NewsService.getNews(true);

        });
}])