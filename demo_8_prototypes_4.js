'use strict';
(function() {

  // constructor function
  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  Person.prototype.age = 4;

  let jim = new Person('Jim', 'Cooper');

  display(jim.__proto__);
  // Person {
  //   age: 4
  //   }
  display(jim.__proto__.__proto__);
  // Object {
  // }
  display(jim.__proto__.__proto__.__proto__);
  // null
  // Object is final in the chain and it doesn't have a prototype
})();