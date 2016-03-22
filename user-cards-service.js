angular.module("mailApp").service('UserCardsService', function($http) {
	this.getAll = function(scope, store) {
		$http.get('https://luminous-heat-258.firebaseio.com/user-cards.json')
		.then((response) => {
		  scope[store] = response.data;
		})
		.catch((error) => {
		  console.log(error);
		});
	}
});