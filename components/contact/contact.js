angular.module("mailApp").component('contact', {
  bindings: {
    contact: '<',
    remove: "&",
    add: "&"
  },
  templateUrl: "components/contact/contact.html",
  controller: function(ContactsService) {
  	this.startEdit = () => {
  		this.edit = true;
  	};
  	this.update = (contact) => {
  		if (contact.id) {
	  		ContactsService.update(contact);
  		}
   	};
  	this.delete = (contact) => {
  		ContactsService.delete(contact);
  		this.remove({contactId: contact.id});
  	};
  	this.submit = (contact) => {
  		if (contact.id) {
  			this.update(contact).then(() => { this.edit = false; });
  		}
  		else {
  			ContactsService.add(contact).then(newContact => {
  				console.log(newContact);
  				this.add({newContact: newContact});
  				this.edit = false;
  			});
  		}
  	};
  	this.editing = () => { return this.edit || !this.contact.id };
  }
});