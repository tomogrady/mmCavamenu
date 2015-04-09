angular.module('cavamenu', ['ionic', 'cavamenu.controller'])


.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    controller: 'AppCtrl'
  })

  .state('app.dishes', {
    url: "/dishes/:dishesId",
    views: {
      'menuContent': {
      
        templateUrl: "templates/dishes.html",
        controller: 'DishesCtrl'
      }
    }
  });
 
  $urlRouterProvider.otherwise('/app/dishes/1');
});
