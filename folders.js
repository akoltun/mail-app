angular.module('mailApp').component('folders', {
  bindings: {
    folderChanged: "&"
  },
  templateUrl: "folders.html",
  controller: function(MailsService) {
    MailsService.getFolders().then(response => { 
      this.folders = response;
      this.selectFolder('Inbox');
    } );
    
    this.selectFolder = function(folder) {
      this.folder = folder
      this.folderChanged({folder: folder});
    };
  }
});