'use strict';
(function() {

  // Every function in JS has a prototype

  let myFunction = function() { };

  display(myFunction.prototype); // {}

  // Objects have undefined prototype
  let person = { firstName: 'Jim' };

  display(person.prototype); // undefined
  // but
  display(person.__proto__);
  // Object {
  // }

  // constructor function
  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  display(Person.prototype);
  // Person {
  // }

  let jim = new Person('Jim', 'Cooper');
  display(jim.__proto__);
  // Person {
  // }
  display(Person.prototype === jim.__proto__); // true


  function Person2(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // when we add property to construction function prototype, the object's jim __proto__ is also affected
  Person2.prototype.age = 29;

  display(Person2.prototype);
  // Person2 {
  //   age: 29
  //   }


  let jim2 = new Person2('Jim', 'Cooper');

  display(jim2.age); // 29

  display(Person2.prototype === jim2.__proto__); // true

  let sofia = new Person2('Sofie', 'Cooper');
  sofia.__proto__.age = 19; // sets the age for all objects - both jim and sofia

  display(jim2.__proto__);
  // Person2 {
  //   age: 29
  //   }
  display(sofia.__proto__);
  // Person2 {
  //   age: 29
  //   }


})();