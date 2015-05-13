var bookmymove = angular.module('bookmymove',[
 'templates',
 'ngMaterial',
 'ngAria',
 'ngAnimate',
 'ui.router',
]);

bookmymove.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$mdThemingProvider', function($stateProvider, $urlRouterProvider, $locationProvider,$mdThemingProvider){
	$stateProvider.state('home',{
      url: '/',
      views: {
        'header': {
          templateUrl: "header.html"
        },
        'content': {
          templateUrl: "index.html"
        },
        'footer':{
          templateUrl: "footer.html"
        }
      }   
    })
  ;
  $urlRouterProvider.otherwise('/');
  //$locationProvider.html5Mode(false).hashPrefix('!');
  $mdThemingProvider.theme('docs-dark', 'default')
   .primaryPalette('teal');
    $mdThemingProvider.theme('docs-darks', 'default')
   .primaryPalette('blue');
}]);