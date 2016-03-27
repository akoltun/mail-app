angular.module('mailApp').component('folders', {
  templateUrl: "components/mail/folders/folders.html",
  controller: function(MailsService, $state) {
    MailsService.getFolders().then(response => { 
      this.folders = response;
      // $state.go('mail.folder', { folder: this.folders[0].url });
    });
  }
});