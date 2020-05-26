'use strict';
(function() {

  class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }

    // static property example
    static adultAge = 18;

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

  class Student extends Person {

    constructor(firstName, lastName, age) {
      super(firstName, lastName, age);
      this._enrolledCourses = [];
    }
    // static function example
    static fromPerson(person) {
      return new Student(person.firstName, person.lastName, person.age);
    }

    enroll(courseId) {
      this._enrolledCourses.push(courseId);
    }

    getCourses() {
      return this.fullName + "'s enrolled courses are: " + this._enrolledCourses.join(', ');
    }
  }

  let jim = new Student('Jim', 'Cooper', 29);
  jim.enroll('CS101');

  display(jim.getCourses()); // Jim Cooper's enrolled courses are: CS101

  display(jim);
  // Student {
  //   firstName: Jim
  //   lastName: Cooper
  //   age: 29
  //   _enrolledCourses: CS101
  //   }

  let casey = new Person('Casey', 'Williams', 30);

  let caseyStudent = Student.fromPerson(casey);
  display(caseyStudent);
  // Student {
  //   firstName: Casey
  //   lastName: Williams
  //   age: 30
  //   _enrolledCourses:
  //   }


})();