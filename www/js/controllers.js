angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Util) {

  Util.showAlert();

})

.controller('AccountsCtrl', function($scope, $timeout, Chats, Account, Util) {

  $scope.load = function() {
    Util.showLoading();
    Account.list().then(function(result) {
      $scope.accounts = result.data.data;
      Util.hideLoading();
      console.log($scope.accounts);
    }).catch(function(err) {
      Util.hideLoading();
      console.log(err);
    }).finally(function() {
      // Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    });
  };

  $scope.load();

  $scope.doRefresh = function() {
    $scope.load();
  }

  //  AccountService.getAccounts();
  //  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('AccountDetailCtrl', function($scope, $stateParams, Account) {
  $scope.chat = Account.get($stateParams.Id);
})

.controller('SettingCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('LoginCtrl', function($scope, $window, $state) {

  $scope.login = function() {
    $state.go('tab.dash');
  };

});
