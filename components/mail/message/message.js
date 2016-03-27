angular.module("mailApp").component('message', {
  bindings: {
  	folder: "<",
    message: "<"
  },
  templateUrl: "components/mail/message/message.html"
});