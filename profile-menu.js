angular.module('mailApp').component('profileMenu', {
  templateUrl: "dropdown.html",
  controller: function () {
  	this.items = ['Profile', 'Sign out'];
  	this.title = 'Alexander';
  	this.alignRight = true;
  	this.select = (item) => {

  	}
  }
});