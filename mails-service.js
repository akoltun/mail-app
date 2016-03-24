angular.module('mailApp').service('MailsService', function($http, firebase) {
  this.getFolders = function() {
    return $http.get(firebase.getBaseUrl() + 'folder-names.json')
    .then(response => firebase.normalizeToArray(response.data))
    .catch((error) => {
      console.error(error);
    });
  };

  this.getMessages = function(folder) {
    return $http.get(firebase.getBaseUrl() + 'folders/' + folder + '.json')
    .then(response => {
      response.data.items = firebase.normalizeToArray(response.data.items);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
  };
});