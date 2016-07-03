angular.module('app.controllers', [])
    .controller('homeCtrl', ['$scope', 'NewsService', '$ionicModal', function ($scope, NewsService, $ionicModal) {
        NewsService.getNews().then(function (newsFromDB) {
            $scope.news = newsFromDB;
        });

        $ionicModal.fromTemplateUrl('templates/addNews.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $scope.createNews = function () {
            $scope.modal.show();
        };

        $scope.closeModal = function () {
            $scope.modal.hide();
        };
        // Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function () {
            $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hidden', function () {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function () {
            // Execute action
        });
}])
    .controller('raidplanerCtrl', function ($scope) {

    })
    .controller('rosterCtrl', function ($scope) {

    })
    .controller('loginCtrl', function ($scope) {

    })