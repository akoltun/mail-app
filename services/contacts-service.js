angular.module("mailApp").service('ContactsService', function($http, firebase) {
	this.getAll = function() {
		return $http.get(firebase.getBaseUrl() + 'contacts.json')
		.then(response => firebase.normalizeToArray(response.data))
		.catch((error) => {
		  console.error(error);
		});
	};

	this.add = function(contact) {
		return $http.post(firebase.getBaseUrl() + 'contacts.json', contact)
		.then(response => {
			contact.id = response.data.name;
			return contact;
		})
		.catch((error) => {
			console.error(error);
		});
	};

	this.update = function(contact) {
		return $http.put(firebase.getBaseUrl() + 'contacts/' + contact.id + '.json', contact)
		.then(response => response.data)
		.catch((error) => {
			console.error(error);
		});
	};

	this.delete = function(contact) {
		return $http.delete(firebase.getBaseUrl() + 'contacts/' + contact.id + '.json')
		.then(response => response.data)
		.catch((error) => {
			console.error(error);
		});
	};
});