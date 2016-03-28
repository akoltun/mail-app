angular.module('mailApp').service('MailsService', function($http, firebase) {
  var folders;

  this.getFolders = function() {
    if (!folders) {
      folders = $http.get(firebase.getBaseUrl() + 'folder-list.json')
        .then(response => response.data)
        .catch((error) => {
          folders = null;
          console.error(error);
        });
    }
    return folders
  };

  this.getFolderByUrl = function(url) {
    return this.getFolders().then(response => {
      for (var i = 0; i < response.length; i++) {
        if (response[i].url == url) {
          return response[i];
        }
      }
      return null;
    });
  };

  this.getMessages = function(folder) {
    return $http.get(firebase.getBaseUrl() + 'folders/' + folder.url + '.json')
    .then(response => {
      response.data.items = firebase.normalizeToArray(response.data.items);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
  };

  this.getMessage = function(folder, id) {
    return $http.get(firebase.getBaseUrl() + 'folders/' + folder.url + '/items/' + id + '.json')
    .then(response => response.data)
    .catch((error) => {
      console.error(error);
    });
  };

  this.deleteMessage = function(folder, id) {
    return $http.delete(firebase.getBaseUrl() + 'folders/' + folder.url + '/items/' + id + '.json')
    .then(response => response.data)
    .catch((error) => {
      console.error(error);
    });
  };
});