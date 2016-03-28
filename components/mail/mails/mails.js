angular.module('mailApp').component('mails', {
  templateUrl: "components/mail/mails/mails.html",
  controller: function(MailsService) {
    this.folderChanged = function(folder) {
    	this.messages = 'loading';
      MailsService.getMessages(folder.url).then(response => this.messages = response);
    };
  }
});