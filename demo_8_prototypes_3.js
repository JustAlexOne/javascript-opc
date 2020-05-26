'use strict';
(function() {

    // constructor function
    function Person(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    Person.prototype.age = 29;

    var jim = new Person('Jim', 'Cooper');
    var sofia = new Person('Sofia', 'Cooper');

    display(jim.age); // 29
    display(sofia.age); // 29

    Person.prototype = { age: 18 };
    // the jim's and sofia's ages are not affected in this case, since we've created a new prototype for Person and jim and sofia were created before that (using the prototype, which had age = 29)

    display(jim.age); // 29
    display(sofia.age); // 29

    // but new objects will have age = 18, since they will be created using new prototype with age = 18

    var kris = new Person('Kris', "Cooper");
    display(kris.age) // 18. The age 18 is taken from new prototype assigned to Person

})();