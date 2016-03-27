angular.module("mailApp").component('contacts', {
  controller: function(ContactsService) {
  	this.newContact = { id: null }
  	ContactsService.getAll().then((response) => {
  		this.contacts = response;
  	});
  	this.remove = (id) => {
  		for (var i = 0; i < this.contacts.length; i++) {
  			if (this.contacts[i].id == id) {
  				this.contacts.splice(i, 1);
  				break;
  			}
  		}
  	};
  	this.add = (newContact) => {
  		this.contacts.splice(0, 0, newContact);
  		this.newContact = { id: null }
  	};
  },
  templateUrl: "components/contacts/contacts.html"
});