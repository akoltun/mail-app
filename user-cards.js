angular.module("mailApp").component('userCards', {
  controller: function(UserCardsService) {
  	UserCardsService.getAll(this, 'cards');
  },
  templateUrl: "user-cards.html"
});