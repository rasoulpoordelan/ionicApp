angular.module('starter.service', [])



.service('AccountService', function($http) {

  this.getAccounts = function() {
    $http({
      method: "GET",
      url: "http://asreno.com/api/account/getaccounts",
      crossDomain: true
    }).then(function(response) {
      console.log("service-----------------");
    });
  };

});
