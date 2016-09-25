angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

})

.controller('AccountsCtrl', function($scope, $timeout, Chats, Account, Util,AccountService) {
  $scope.load = function() {
    Util.showLoading();
    Account.list().then(function(result) {
      $scope.accounts = result.data.data;
      Util.hideLoading();
      console.log($scope.accounts);
    }).catch(function(err) {
      Util.hideLoading();
      console.log(err);
    });
  };

  $scope.load();

  AccountService.getAccounts();
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
