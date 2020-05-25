'use strict';
(function() {
  // this way of crating object is called  "creating object via object literal" or simply "object literal"
  let person1 = {
    firstName: 'Jim',
    lastName: 'Cooper',
    isAdult: function() { return this.age > 18; }
  };

  // anther way to cretae object - creating object via Object.create() and prototype
  let person2 = Object.create(
    Object.prototype, {
    firstName: { value: 'Jim', enumerable: true, writable: true, configurable: true },
    lastName: { value: 'Cooper', enumerable: true, writable: true, configurable: true },
    age: { value: 29, enumerable: true, writable: true, configurable: true },
  }
  );

  display(person1);
  display(person2);
  // outputs the same resutls
})();