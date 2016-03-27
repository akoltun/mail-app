angular.module('mailApp').component('mails', {
  templateUrl: "components/mails/mails.html",
  controller: function(MailsService) {
    this.folderChanged = function(folder) {
    	this.messages = 'loading';
      MailsService.getMessages(folder.toLowerCase()).then(response => this.messages = response);
    };
  }
});