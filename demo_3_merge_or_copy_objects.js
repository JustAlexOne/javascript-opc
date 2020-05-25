'use strict';
(function() {

  // adding object properties dynamically
  let person1 = {
    firstName: 'Jim',
    lastName: 'Cooper',
    isAdult: function() { return this.age > 18; }
  };

  let person2 = {};

  Object.assign(person2, person1); // make a copy of person1 in person2
  // NOTE - this assign() method MUTATES (CHANGES) the object from first argument (person2 in this case)
  display(person2);
  // Object {
  //   firstName: Jim
  //   lastName: Cooper
  //   isAdult: function() { return this.age > 18; }
  //   }
  display(person1 == person2); // false

  let heatlhStats = {
    height: 178,
    weight: 65
  };

  /*
  In case you collect data about an object (e.g. person1) in different places.
  You can then merge collected data into one object using Object.assign() method
  */
  Object.assign(person1, heatlhStats);
  display(person1);
  // Object {
  //   firstName: Jim
  //   lastName: Cooper
  //   isAdult: function() { return this.age > 18; }
  //   height: 178
  //   weight: 65
  //   }


  // to avoid mutation, pass empty object as first argument to assign() function, which will be used as a new base object for the merge
  let newMergedObject = Object.assign({}, person1, heatlhStats);
  // person1 and healthStats are not changed - all data is merged into newMergedObject
  // or
  let newMergedObject2 = {};
  Object.assign(newMergedObject2, person1, heatlhStats);


})();