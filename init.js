angular.module("mailApp", ["ui.router"])
.config(function($stateProvider) {
	$stateProvider
		.state('mail', {
			url: '/mail',
			template: '<mails></mails>'
		})
		.state('mail.new', {
			url: '/new'
		})
		.state('mail.folder', {
			url: '/:folder',
			template: '<messages folder="$ctrl.folder" messages="$ctrl.messages"></messages>',
			controller: function($stateParams, MailsService) {
				this.messages = 'loading';
				MailsService.getFolderByUrl($stateParams.folder).then(response => {
					this.folder = response;
					MailsService.getMessages(this.folder).then(response => {
						this.messages = response;
					});
				});
			},
			controllerAs: '$ctrl'
		})
		.state('mail.message', {
			url: '/:folder/:message',
			template: '<message folder="$ctrl.folder" message="$ctrl.message"></message>',
			controller: function($stateParams, MailsService) {
				this.message = 'loading';
				MailsService.getFolderByUrl($stateParams.folder).then(response => {
					this.folder = response;
					MailsService.getMessage(this.folder, $stateParams.message).then(response => {
						this.message = response;
						console.log(this.message);
					});
				});
			},
			controllerAs: '$ctrl'
		})
		.state('contacts', {
			url: '/contacts',
			template: '<contacts></contacts>'
		});
});