import firstCodeTest from './components/firstCodeTest';
import secondCodeTest from './components/secondCodeTest';
import thirdCodeTest from './components/thirdCodeTest';
import forthCodeTest from './components/forthCodeTest';

const jsCourse = {
  init() {
    const root = document.documentElement;
    root.classList.remove('no-js');
    root.classList.add('js');
    // firstCodeTest.init();
    // secondCodeTest.init();
    // thirdCodeTest.init();
    forthCodeTest.init();

    // Fizz buss
    // var i = 1;
    // for (i; i < 101; i++) {
    //   if (i % 5 === 0) {
    //     console.log('Fizz');
    //   } else if (i % 3 === 0) {
    //     console.log('Buzz');
    //   } else if (i % 15 === 0) {
    //     console.log('FizzBuzz');
    //   } else {
    //     console.log(i);
    //   }
    // }

    // let firstName = 'John';
    // let age = 17;

    //IF ELSE STATEMENT
    // if (age < 13) {
    //   console.log(firstName + ' is a boy');
    // } else if (age >= 13 && age < 20) {
    //   console.log(firstName + ' is a teenager');
    // } else if (age >= 20 && age < 30) {
    //   console.log(firstName + ' is a young man');
    // } else {
    //   console.log(firstName + ' is a man');
    // }

    //TENARY OPERATORS
    // age >= 18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice');
    // let drink = age >= 18 ? 'beer' : 'juice';
    // console.log(drink);

    //SWITCH STATEMENTS
    // let job = 'cop';
    // switch (job) {
    //   case 'teacher':
    //     console.log(firstName + ' teaches kids how to code');
    //     break;
    //   case 'driver':
    //     console.log(firstName + ' is an Uber driver');
    //     break;
    //   default:
    //     console.log(firstName + ' does nothing');
    // }
    // let age = 31;
    // switch (true) {
    //   case age < 13:
    //     console.log(firstName + ' is a boy');
    //     break;
    //   case age >= 13 && age < 20:
    //     console.log(firstName + ' is a teenager');
    //     break;
    //   case age >= 20 && age < 30:
    //     console.log(firstName + ' is a young man');
    //     break;
    //   default:
    //     console.log(firstName + ' is a man');
    // }

    //TRUTHY AND FALSY VALUES
    // Falsy values: undefined, null, 0, '', NaN
    // Truthy: everything else

    // == type coercion
    // === strict equality operator

    // let height = 23;

    // if (height || height === 0) {
    //   console.log('Variable is defined');
    // } else {
    //   console.log('Variable has not been defined');
    // }

    // // Equality operators
    // if (height === '23') {
    //   console.log('The == operator does type coercion');
    // } else {
    //   console.log('The === operator does not do type coercion');
    // }

    //Basic Functions - 20
    // function calculateAge(birthYear) {
    //   return 2019 - birthYear;
    // }

    // var ageJohn = calculateAge(34);
    // var ageMike = calculateAge(25);
    // var ageJane = calculateAge(19);

    // console.log(ageJohn, ageMike, ageJane);

    // function yearsUntilRetirement(year, firstName) {
    //   let age = calculateAge(year);
    //   let retirement = 65 - age;

    //   if (retirement > 0) {
    //     console.log(firstName + ' retires in ' + retirement);
    //   } else {
    //     console.log(firstName + ' is retired');
    //   }
    // }

    // yearsUntilRetirement(1985, 'Matt');
    // yearsUntilRetirement(1983, 'Tom');
    // yearsUntilRetirement(1953, 'Paul');

    //Function statement and expression

    //function declaration
    // function whatDoYouDo (job, firstName) {

    // }

    //Function expression
    // let whatDoYouDo = function(job, firstName) {
    //   switch (job) {
    //     case 'teacher':
    //       return firstName + ' teaches';
    //     case 'driver':
    //       return firstName + ' drives';
    //     case 'designer':
    //       return firstName + ' designs';
    //     default:
    //       return firstName + ' does something different';
    //   }
    // };
    // console.log(whatDoYouDo('teacher', 'Matt'));

    // Arrays
    // var names = ['John', 'Mark', 'Jane'];
    // var years = new Array(1983, 1985, 1960);
    // console.log(names[0], years.length);

    //Mutate data
    // names[1] = 'Ben';
    // names[names.length] = 'Mary';
    // // console.log(names, years.length);

    // var john = ['John', 'Smith', 1990, 'designer'];

    // // POP Removes the last element from an array and returns that element.
    // // john.pop('blue');

    // // PUSH Adds one or more elements to the end of an array and returns the new length of the array.
    // john.push('blue');

    // // UNSHIFT Adds one or more elements to the front of an array and returns the new length of the array.
    // john.unshift('blue');

    // // console.log(john.indexOf(1990));

    // var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
    // console.log(isDesigner);

    //OBJECTS

    // var john = {
    //   firstName: 'John',
    //   lastName: 'Smith',
    //   birthYear: 1999,
    //   family: ['Jane', 'Mark', 'Emily'],
    //   job: 'teacher',
    //   isMarried: false
    // };

    // console.log(john.firstName);
    // console.log(john['lastName']);

    // var x = 'birthYear';

    // console.log(john[x]);

    // john.job = 'designer';
    // john['isMarried'] = true;
    // console.log(john);

    // var jane = new Object();

    // jane.firstName = 'Jane';
    // jane.birthYear = 1969;
    // // jane[lastName] = 'Kanes';
    // console.log(jane);

    //METHODS

    // var john = {
    //   firstName: 'John',
    //   lastName: 'Smith',
    //   birthYear: 1999,
    //   family: ['Jane', 'Mark', 'Emily'],
    //   job: 'teacher',
    //   isMarried: false,
    //   age: function() {
    //     this.age = 2019 - this.birthYear;
    //   }
    // };

    // // // console.log(john.age());

    // john.age();

    // console.log(john);
  }
};

jsCourse.init();
