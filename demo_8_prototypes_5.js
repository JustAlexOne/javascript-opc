'use strict';
(function() {

  // constructor function
  function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    Object.defineProperty(this, 'fullName', {
      get: function() {
        return this.firstName + ' ' + this.lastName;
      },
      set: function(fullName) {
        var nameParts = fullName.split(' ');
        this.firstName = nameParts[0];
        this.lastName = nameParts[1];
      },
      enumerable: true
    });
  }

  function Student(firstName, lastName, age) {
    Person.call(this, firstName, lastName, age);
    this._enrolledCourses = [];
    this.enroll = function(courseId) {
      this._enrolledCourses.push(courseId);
    };

    this.getCourses = function() {
      return this.fullName + "'s enrolled courses are: " +
        this._enrolledCourses.join(', ');
    };
  }
  // so, Student is actually a person as well, so it would be nice to have Student inherit the Person prototype
  // here is how to do that
  // creating a prototype inheritance chain
  Student.prototype = Object.create(Person.prototype);
  Student.prototype.constructor = Student;

  // to add a static function to constructor function
  Student.fromPerson = function(person) {
    return new Strudent(person.firstName, person.lastName, person.age);
  }

  let jim = new Student('Jim', 'Cooper', 29);
  display(jim);
  // Student {
  //   firstName: Jim
  //   lastName: Cooper
  //   age: 29
  //   fullName: Jim Cooper
  //   _enrolledCourses:
  //   enroll: function(courseId) { this._enrolledCourses.push(courseId); }
  //   getCourses: function() { return this.fullName + "'s enrolled courses are: " + this._enrolledCourses.join(', '); }
  //   }

  display(jim.__proto__);
  // Student {
  // }
  display(jim.__proto__.__proto__);
  // Person {
  // }


  jim.enroll('CS205');
  jim.enroll('MA101');
  jim.enroll('PS101');

  display(jim.getCourses());
  // Jim Cooper's enrolled courses are: CS205, MA101, PS101
})();