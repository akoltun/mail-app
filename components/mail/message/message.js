angular.module("mailApp").component('message', {
  bindings: {
  	folder: "<",
    message: "<"
  },
  templateUrl: "components/mail/message/message.html",
  controller: function(MailsService, $state) {
  	var moveToFolder = (targetFolder) => {
    	var message = this.message;
    	var folder = this.folder;
    	this.message = 'loading';
    	
  		MailsService.getFolderByUrl(targetFolder).then(response => {
  			MailsService.moveMessage(folder, response, message).then(response => {
		      $state.go('mail.folder', { folder: folder.url });
  			});	
  		});
  	}

    this.reply = () => {

    },
    this.forward = () => {

    },
    this.spam = () => {
    	moveToFolder('spam');
    },
    this.unspam = () => {
    	moveToFolder('inbox');
    },
    this.save = () => {

    },
    this.send = () => {

    },
    this.delete = () => {
    	if (this.folder.deletePermanently) {
    		var url = this.folder.url;
    		MailsService.deleteMessage(this.folder, this.message).then(response => {
		      $state.go('mail.folder', { folder: url });
  			});
    	}
    	else {
    		moveToFolder('trash');
    	}
    }
  }
});