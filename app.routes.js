(function() {
  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$routeProvider'];
  function RoutesConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'home.html'
      })
      .when('/signup', {
        templateUrl: 'signup.html',
        controller: 'SignupController as signupCtrl'
      })
      .when('/myinfo', {
        templateUrl: 'myinfo.html',
        controller: 'MyInfoController as myInfoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
})();
