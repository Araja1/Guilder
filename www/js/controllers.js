angular.module('app.controllers', [])

.controller('homeCtrl', ['$scope', 'SQLFactory', function ($scope, SQLFactory) {
    SQLFactory.getNews().then(function (news) {
        $scope.news = news;
    });
}])

.controller('raidplanerCtrl', function ($scope) {

})

.controller('rosterCtrl', function ($scope) {

})

.controller('loginCtrl', function ($scope) {

})