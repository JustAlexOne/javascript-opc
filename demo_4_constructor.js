'use strict';
(function() {

  let jim = {
    firstName: 'Jim',
    lastName: 'Cooper',
    isAdult: function() { return this.age > 18; }
  };

  // a constructor function for Person objects with default values
  function PersonWithDefaultValues() {
    this.firstName = 'Jim';
    this.lastName = 'Cooper';
  }
  // now we can creta a new person like this:
  let defaultPerson = new PersonWithDefaultValues();
  display(defaultPerson);
  // Person {
  //   firstName: Jim
  //   lastName: Cooper
  //   }

  // a constructor function for Person objects with parameters
  function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isAdult = function() { return this.age > 21; }
    // anonnimous function example
    // this.isAdult = () => this.age > 21;
  }

  let person = new Person('Jim', 'Cooper', 29);
  display(person);
  display(person.isAdult());

})();