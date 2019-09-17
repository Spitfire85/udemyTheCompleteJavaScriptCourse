import firstCodeTest from './components/firstCodeTest';
import secondCodeTest from './components/secondCodeTest';

const jsCourse = {
  init() {
    const root = document.documentElement;
    root.classList.remove('no-js');
    root.classList.add('js');
    // firstCodeTest.init();
    // secondCodeTest.init();

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

    function calculateAge(birthYear) {
      return 2019 - birthYear;
    }

    var ageJohn = calculateAge(34);
    var ageMike = calculateAge(25);
    var ageJane = calculateAge(19);

    console.log(ageJohn, ageMike, ageJane);
  }
};

jsCourse.init();
