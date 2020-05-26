'use strict';
(function() {

  let person = {
    name: {
      first: 'Jim',
      last: 'Cooper',
    },
    hasCar() { return true; }
  };

  Object.defineProperty(person, 'fullName',
    {
      get: function() {
        return this.name.first + ' ' + this.name.last;
      },
      set: function(value) {
        var nameParts = value.split(' ');
        this.name.first = nameParts[0];
        this.name.last = nameParts[1];
      }
    });

  display(person.fullName); // Jim Cooper

  person.fullName = 'Fred Jones';

  display(person.name.first); // Fred
  display(person.name.last); // Jones
  display(person.fullName); // Fred Jones

})();