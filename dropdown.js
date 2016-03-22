angular.module('mailApp').component('dropdown', {
  templateUrl: "dropdown.html",
  bindings: {
  	title: '=',
    items: '<',
    updateTitle: '<',
    alignRight: '<',
    width: '<'
  },
  controller: function () {
    if (this.updateTitle) {
      this.title = this.title || this.items[0];
      this.select = (item) => {
        this.title = item;
      }
    } 
  }
});