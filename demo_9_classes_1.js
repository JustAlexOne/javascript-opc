'use strict';
(function() {

  class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
    // getters and setters
    get fullName() {
      return this.firstName + ' ' + this.lastName;
    }
    set fullName(fullName) {
      var nameParts = fullName.split(' ');
      this.firstName = nameParts[0];
      this.lastName = nameParts[1];
    }
    // declaring a function within a class
    isAdult() {
      return this.age >= 18;
    }
  }


  let jim = new Person('Jim', 'Cooper', 29);
  display(jim);
  // Person {
  //   firstName: Jim
  //   lastName: Cooper
  //   age: 29
  //   }
  display(jim.fullName); // Jim Cooper
  jim.fullName = 'Fred Jones';
  display(jim.fullName); // Fred Jones
  display(jim.isAdult()); // true

  /* class's getters and setters do not belong to class's instance, they belong to class's prototype
  getters and setters are not listed when printing the object (in other words, getters and setters properties for class, have 'enumerable' attribute = false)
  if you want to have getters and setters of the class listed, when printing class objects, then it's neeeded to set attribute 'enumerable = true' for those properties
  here is how it can be done:
  */
  // Object.defineProperty(Person.prototype, 'fullName', { enumerable: true });
  // Person {
  //   firstName: Fred
  //   lastName: Jones
  //   age: 29
  //   fullName: Fred Jones
  //   }



})();