angular.module('mailApp').service('firebase', function() {
	this.getBaseUrl = () => 'https://luminous-heat-258.firebaseio.com/';
	
  this.normalizeObject = function(id, object) {
    if(!object) return null;
    object.id = id;
    return object;
  }

	this.normalizeToArray = function(object) {
    if(!object) return [];
    return Object.keys(object).map(key => {
      return this.normalizeObject(key, object[key]);
    });
  };
});