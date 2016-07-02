angular.module('app.controllers', [])

.controller('homeCtrl', ['$scope', 'NewsFactory', function ($scope, NewsFactory) {
    $scope.news = NewsFactory.getNews();
}])

.controller('raidplanerCtrl', function ($scope) {

})

.controller('rosterCtrl', function ($scope) {

})

.controller('loginCtrl', function ($scope) {

})