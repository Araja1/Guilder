angular.module('app.services', [])

.factory('NewsFactory', [function () {
    // icon
    // title
    // date
    // image
    // text
    var news = [{
        icon: 'ion-ios-eye-outline',
        title: 'Addonstart!',
        date: '30.08.2016',
        image: 'img/pd2vjGxSjuMOzIppAukP_13055790_10154747497393222_3351569145771011532_o.jpg',
        text: 'Die Legion kommt. Macht euch bereit!'
    }];

    var getNews = function () {
        return news;
    };

    return {
        getNews: getNews
    };
}])

.service('BlankService', [function () {

}]);