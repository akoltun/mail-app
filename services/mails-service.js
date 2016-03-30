angular.module('mailApp').service('MailsService', function($http, firebase, $q) {
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
    .then(response => firebase.normalizeObject(id, response.data))
    .catch((error) => {
      console.error(error);
    });
  };


  this.moveMessage = function(sourceFolder, targetFolder, message) {
    console.log('move', sourceFolder, targetFolder, message);
    return $q.all([
        this.createMessage(targetFolder, message),
        this.deleteMessage(sourceFolder, message)  
      ]);
  };

  this.createMessage = function(folder, message) {
    return $http.post(firebase.getBaseUrl() + 'folders/' + folder.url + '/items.json', message)
    .then(response => response.data)
    .catch((error) => {
      console.error(error);
    });    
  };

  this.updateMessage = function(folder, message) {
    return $http.put(firebase.getBaseUrl() + 'folders/' + folder.url + '/items/' + message.id + '.json', message)
    .then(response => response.data)
    .catch((error) => {
      console.error(error);
    });    
  };

  this.deleteMessage = function(folder, message) {
    console.log('delete', folder, message);
    return $http.delete(firebase.getBaseUrl() + 'folders/' + folder.url + '/items/' + message.id + '.json')
    .then(response => response.data)
    .catch((error) => {
      console.error(error);
    });
  };
});