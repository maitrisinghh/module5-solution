(function() {
  angular.module('MenuApp')
    .controller('SignupController', SignupController);

  SignupController.$inject = ['UserDataService', '$http'];

  function SignupController(UserDataService, $http) {
    var signupCtrl = this;
    signupCtrl.user = {};
    signupCtrl.errorMessage = '';
    signupCtrl.successMessage = '';

    signupCtrl.submit = function() {
      var favoriteDishUrl = `https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/${signupCtrl.user.favoriteDishCategory}/menu_items/${signupCtrl.user.favoriteDish}.json`;

      $http.get(favoriteDishUrl).then(function(response) {
        if (response.data) {
          // Save user data
          UserDataService.saveUserData(signupCtrl.user);
          signupCtrl.successMessage = 'Your information has been saved';
          signupCtrl.errorMessage = '';
        } else {
          signupCtrl.errorMessage = 'No such menu number exists';
        }
      });
    };
  }
})();
