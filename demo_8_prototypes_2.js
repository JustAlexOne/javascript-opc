'use strict';
(function() {
  
  // constructor function
  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  Person.prototype.age = 29;

  let jim = new Person('Jim', 'Cooper');
  let sofia = new Person('Sofia', 'Cooper');

  display(jim.age); // 29
  display(sofia.age); // 29

  display(jim.hasOwnProperty('age')) // false
  // but
  display(jim.age); // 29, because the value of age is taken from prototype, when it;s not found in the object

  // once we add a property to the object
  jim.age = 18; // we change the jim's age property, but not the prototype's age

  display(jim.hasOwnProperty('age')) // true
  display(jim.age); // 18, becasue now the 'age' property value is found in the jim object, before it's found in its prototype

  display(sofia.age); // 29

  display(jim.age); // 18
  display(jim.__proto__.age); // 29

  // THE SAME THING APPLIES TO FUNCTIONS IN OBJECTS

})();