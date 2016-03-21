angular.module('mailApp').component('mainMenu', {
  templateUrl: "dropdown.html",
  controller: function () {
  	this.items = ['Mail', 'Contacts'];
  	this.title = this.items[0];
  	this.select = (item) => {
  		this.title = item;
  	}
  }
});