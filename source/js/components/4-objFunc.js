const objFunc = {
  init() {
    // let john = {
    //   name: 'John',
    //   yearOfBirth: 1990,
    //   job: 'teacher'
    // };

    // Function constructor
    // let Person = function(name, yearOfBirth, job) {
    //   this.name = name;
    //   this.yearOfBirth = yearOfBirth;
    //   this.job = job;
    // };
    // // It's very inefficent to call a method from an constructor function as each time it's called it's created again.
    // // So we use a prototype
    // Person.prototype.calculateAge = function () {
    //   console.log(2019 - this.yearOfBirth);
    // }

    // // You can also use properties and no just methods as above.
    // Person.prototype.lastName = 'Smith';

    // // New creates and empty object, which then the Person constructor adds properties too
    // let john = new Person('John', 1990, 'teacher');
    // let jane = new Person('Jane', 1996, 'waitress');
    // let mark = new Person('Mark', 1948, 'retired');

    // john.calculateAge();
    // jane.calculateAge();
    // mark.calculateAge();

    // console.log(john);
    // console.log(john.hasOwnProperty('lastName'));

    // Object.create

    // let personProto = {
    //   // name: 'John',
    //   // yearOfBirth: 1990,
    //   // job: 'teacher',
    //   calculateAge: function () {
    //     console.log(2019 - this.yearOfBirth);
    //   }
    // };

    // let john = Object.create(personProto);
    // john.name = 'John';
    // john.yearOfBirth = 1990;
    // john.job = 'teacher';
    // console.log(john);

    // let jane = Object.create(personProto, {
    //   name: {value: 'Jane'},
    //   yearOfBirth: {value: 1929},
    //   job: {value: 'teacher'}
    // });
    // console.log(jane);

    //Primitives vs Objects

    //Primitives
    // let a = 23;
    // let b = a;
    // a = 44;
    // console.log(a, b);

    // //Objects
    // let obj1 = {
    //   name: 'John',
    //   age: 26
    // };

    // let obj2 = obj1;

    // obj1.age = 28;

    // console.log(obj1, obj2);

    // //Functions
    // let age = 32;
    // let obj = {
    //   name: 'Jonas',
    //   city: 'Lisbon'
    // }

    // function change(a,b) {
    //   a = 30;
    //   b.city = 'London'
    // }

    // change(age,obj);

    // console.log(age, obj);

    //Functions as arguements
    let years = [1990, 1967, 1925, 1985, 1998];

    //fn parameter here is a callback function
    // function arrayCalc(arr, fn) {
    //   let arrResult = [];
    //   for (let i = 0; i < arr.length; i++) {
    //     arrResult.push(fn(arr[i]));
    //   }
    //   return arrResult;
    // }

    // function calculateAge(element) {
    //   return 2019 - element;
    // }

    // function isFullAge(element) {
    //   return element >= 18;
    // }

    // function maxHeartRate(element) {
    //   if (element >= 18 && element <= 81) {
    //     return Math.round(206.9 - (0.67 * element));
    //   } else {
    //     return 'N/A';
    //   }
    // }

    // let ages = arrayCalc(years, calculateAge);
    // console.log(ages);

    // let over18 = arrayCalc(ages, isFullAge);
    // console.log(over18);

    // let heartBeat = arrayCalc(ages, maxHeartRate);
    // console.log(heartBeat);

    //Functions returning functions
    // function interviewQuestion(job) {
    //   if (job === 'designer') {
    //     return function(name) {
    //       console.log(name + ' can you explain UX design?');
    //     }
    //   } else if (job === 'teacher') {
    //     return function(name) {
    //       console.log(name + ' what years do you teach?');
    //     }
    //   } else {
    //     return function(name) {
    //       console.log('Hello ' + name + ', what do you do?');
    //     }
    //   }
    // }

    // let teacherQuestion = interviewQuestion('teacher');
    // teacherQuestion('John');

    // let designerQuestion = interviewQuestion('designer');
    // designerQuestion('Mark');

    // let policeQuestion = interviewQuestion('police');
    // policeQuestion('Peter');

    // interviewQuestion('teacher')('Matt');

    //IIFE
    // function game () {
    //   const score = Math.random() * 10;
    //   console.log(score >= 5);
    // }

    // game();

    // (function(){
    //   const score = Math.random() * 10;
    //   console.log(score >= 5);
    // })();

    // (function(goodLuck){
    //   const score = Math.random() * 10;
    //   console.log(score >= 5 - goodLuck);
    // })(10);

    // function ageTilRetirement(retirement) {
    //   const a = ' years left until retirement';

    //   return function(yearOfBirth) {
    //     const age = 2019 - yearOfBirth;
    //     console.log((retirement - age) + a)
    //   }
    // }

    // ageTilRetirement(34);

    // let retirementUS = ageTilRetirement(66);
    // retirementUS(1990);

    // let retirementGermany = ageTilRetirement(65);
    // retirementGermany(1990);

    // let retirementIceland = ageTilRetirement(67);
    // retirementIceland(1990);

    // function newInterview(job) {
    //   return function(name) {
    //     if (job === 'designer') {
    //         console.log(name + ' can you explain UX design?');
    //     } else if (job === 'teacher') {
    //         console.log(name + ' what years do you teach?');
    //     } else {
    //         console.log('Hello ' + name + ', what do you do?');
    //     }
    //   }
    // }

    // let interviewName = newInterview('designer');

    // interviewName('John');

    // newInterview('designer')('John');

    // ageTilRetirement(66)(1990);

    //Functions returning functions
    // function interviewQuestion(job) {
    //   if (job === 'designer') {
    //     return function(name) {
    //       console.log(name + ' can you explain UX design?');
    //     }
    //   } else if (job === 'teacher') {
    //     return function(name) {
    //       console.log(name + ' what years do you teach?');
    //     }
    //   } else {
    //     return function(name) {
    //       console.log('Hello ' + name + ', what do you do?');
    //     }
    //   }
    // }

    // let teacherQuestion = interviewQuestion('teacher');
    // teacherQuestion('John');

    // let designerQuestion = interviewQuestion('designer');
    // designerQuestion('Mark');

    // let policeQuestion = interviewQuestion('police');
    // policeQuestion('Peter');

    // interviewQuestion('teacher')('Matt');

    let john = {
      name: 'John',
      age: 26,
      job: 'teacher',
      present: function(style, timeOfDay) {
        if (style === 'formal') {
          console.log(
            'Good ' + timeOfDay + " ladies and gentlemen I'm " + this.name + " I'm a " + this.job + " I'm " + this.age
          );
        } else if (style === 'friendly') {
          console.log(
            "Sup it's the" + timeOfDay + "guys and gals I'm " + this.name + " I'm a " + this.job + " I'm " + this.age
          );
        }
      }
    };

    let emily = {
      name: 'Emily',
      age: 35,
      job: 'shop keeper',
      present: function(style, timeOfDay) {
        if (style === 'formal') {
          console.log(
            'Good ' + timeOfDay + " ladies and gentlemen I'm " + this.name + " I'm a " + this.job + " I'm " + this.age
          );
        } else if (style === 'friendly') {
          console.log(
            "Sup it's the " + timeOfDay + " guys and gals I'm " + this.name + " I'm a " + this.job + " I'm " + this.age
          );
        }
      }
    };

    let johnFriendly = john.present.bind(john, 'friendly', ' morning ');

    console.log(john.present('formal', ' morning '));

    console.log(john.present.call(emily, 'friendly', ' afternoon '));

    johnFriendly();
  }
};

export default objFunc;
