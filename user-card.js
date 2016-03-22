angular.module("mailApp").component('userCard', {
  bindings: {
    card: '<'
  },
  templateUrl: "user-card.html",
  controller: function() {
  	this.startEdit = () => {
  		this.edit = true;
  		// this.userCard.name = this.card.fullName;
  	}
  }
});