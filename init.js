angular.module("mailApp", ["ui.router"])
.config(function($stateProvider) {
	$stateProvider
		.state('mail', {
			url: '/mail',
			template: '<mails></mails>'
		})
		.state('contacts', {
			url: '/contacts',
			template: '<contacts></contacts>'
		});
});