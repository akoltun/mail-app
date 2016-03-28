angular.module("mailApp").component('message', {
  bindings: {
  	folder: "<",
    message: "<"
  },
  templateUrl: "components/mail/message/message.html",
  controller: function(MailsService, $state) {
    this.reply = () => {

    },
    this.forward = () => {

    },
    this.spam = () => {

    },
    this.unspam = () => {

    },
    this.save = () => {

    },
    this.send = () => {

    },
    this.delete = () => {
    	var id = this.message.id;
    	this.message = 'loading';
    	if (this.folder.deletePermanently) {
    		MailsService.deleteMessage(this.folder, id).then(response => {
		      $state.go('mail.folder', { folder: this.folder.url });
  			});
    	}
    }
  }
});