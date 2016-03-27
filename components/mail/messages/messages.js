angular.module("mailApp").component('messages', {
  bindings: {
    folder: "<",
    messages: "<"
  },
  controller: function($state) {
    this.orderColumn = 'date';
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
      $state.go('mail.message', { folder: this.folder.url, message: message.id });
    };
  },
  templateUrl: "components/mail/messages/messages.html"
});