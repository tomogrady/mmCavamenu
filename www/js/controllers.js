angular.module('cavamenu.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('DishesCtrl', function($scope, $stateParams) {
$scope.dishesID = $stateParams.dishesId;
});
