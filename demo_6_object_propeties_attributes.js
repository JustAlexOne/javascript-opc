'use strict';
(function() {

  // adding object properties dynamically
  let person_0 = {
    firstName: 'Jim',
    lastName: 'Cooper',
    hasCar() { return true; }
  };
  display(Object.getOwnPropertyDescriptor(person_0, "firstName"));
  // Object {
  // value: Jim
  // writable: true
  // enumerable: true
  // configurable: true
  // }

  let person = {
    firstName: 'Jim',
    lastName: 'Cooper',
    hasCar() { return true; }
  };
  // WRITABLE
  // change attributes of properties
  Object.defineProperty(person, 'firstName', { writable: false }); // making firstName non-writable
  display(Object.getOwnPropertyDescriptor(person, 'firstName'));
  // let person = {
  //   firstName: 'Jim',
  //   lastName: 'Cooper',
  //   hasCar() { return true; }
  // };

  // if a property is another object, then making in non-writable only makes the property itself not writable, but not the properties inside of this object

  let person2 = {
    name: {
      firstname: 'Jim',
      lastName: 'Cooper'
    },
    age: 29
  }
  Object.defineProperty(person2, 'name', { writable: false });
  person2.name.firstname = 'Kris'; // works just fine
  // but
  // person2.name = { something }; // not allowed, since we set 'name' property to be non-writable

  // Another way to prohibit changing the objects is to use Object.freeze() method
  Object.freeze(person2.name);

  // ENUMERABLE
  // Making property non-enumerable
  let person3 = {
    firstName: 'Jim',
    lastName: 'Cooper',
    hasCar() { return true; }
  }

  // non-enumerble properties are not listed when looping over it via for...in loop or in Object.keys() method
  Object.defineProperty(person3, 'firstName', { enumerable: false });

  for (let propertyName in person3) {
    display(propertyName + ':' + person3[propertyName]);
  }
  // lastName: Cooper
  // hasCar: hasCar() { return true; }
  // the 'firstName' property is not outputed as it is marked as non-enumerable

  display(Object.keys(person3)); // [lastName,hasCar]

  // Also non-enumertad properties are excluded from serialization
  display(JSON.stringify(person3)); // {"lastName":"Cooper"}

  // However, directly accessing variables works just fine
  display(person3.firstName); // Jim

  // CONFIGURABLE - setting up the property descriptors
  // actually allows or prohibits changing 'configurable' and 'enumerable' attributes of the property to be changed (however 'writable' attribute of the property is not affected)
  // also making property non-configurable prohibits the DELETION of the property
  // Making property non-configurable
  let person4 = {
    firstName: 'Jim',
    lastName: 'Cooper',
    hasCar() { return true; }
  }
  Object.defineProperty(person4, 'firstName', { configurable: false });
  // after this you can't change the properties of the property 'firstName'
  // Object.defineProperty(person4, 'firstName', { enumerable: false }); // not allowed now
  // a funny thing - once you set the 'firstName' property to be non-configurable, you can't change it back to be configurable
  // Object.defineProperty(person4, 'firstName', { configurable: true }); // not allowed :)
  // now THAT is OMG:
  // however configurable is false, you still can change the WRITABLE property of the 'firstName' property
  Object.defineProperty(person4, 'firstName', { writable: false }); // works fine... OMG

  let person5 = {
    firstName: 'Jim',
    lastName: 'Cooper',
    hasCar() { return true; }
  }

  delete person5.firstName; // works fine
  display(person5);
  // Object {
  //   lastName: Cooper
  //   hasCar: hasCar() { return true; }
  //   }

  // BUT if we mark 'firstName' property non-configurable, it can't be deleted
  let person6 = {
    firstName: 'Jim',
    lastName: 'Cooper',
    hasCar() { return true; }
  }
  Object.defineProperty(person6, 'firstName', { configurable: false });
  // delete person6.firstName; // not allowed now
})();