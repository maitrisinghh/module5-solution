(function() {
  angular.module('MenuApp')
    .service('UserDataService', UserDataService);

  function UserDataService() {
    var userData = {};

    this.saveUserData = function(data) {
      userData = data;
    };

    this.getUserData = function() {
      return userData;
    };
  }
})();
