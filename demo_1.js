'use strict';
(function() {

  // adding object properties dynamically
  let person = {
    firstName: 'Jim',
    lastName: 'Cooper',
    hasCar: function() { return true; },
    hasCar2() { return true; } // more simplified function declaration
  };

  person.age = 29;
  person.isAdult = function() { return this.age >= 18; }

  display(person.isAdult()); // true
  display(person.age); // 29

})();