angular.module("mailApp").component('messages', {
  bindings: {
    messages: "<",
    message: '='
  },
  controller: function() {
    this.orderColumn = 'from';
    this.sortBy = function(orderColumn) {
      if (this.orderColumn == orderColumn) {
        this.reverse = !this.reverse;
      }
      else {
        this.orderColumn = orderColumn;
        this.reverse = false;
      }
    };
    this.selectMessage = function(message) {
      this.message = message;
    };
  },
  templateUrl: "messages.html"
});