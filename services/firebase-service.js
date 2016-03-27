angular.module('mailApp').service('firebase', function() {
	this.getBaseUrl = () => 'https://luminous-heat-258.firebaseio.com/';
	
	this.normalizeToArray = function(object) {
    if(!object) return [];
    return Object.keys(object).map(key => {
          let normalizedObject = object[key];
          normalizedObject.id = key;
          return normalizedObject;
    });
  };
});