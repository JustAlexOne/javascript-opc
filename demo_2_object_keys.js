'use strict';
(function() {

  // adding object properties dynamically
  let person = {
    firstName: 'Jim',
    lastName: 'Cooper',
    hasCar() { return true; }
  };

  display(Object.keys(person)); // [firstName,lastName,hasCar]

  // other example
  for (const propertyName in person) {
    display(propertyName);
  }

})();