// Lecture Let and Const
// ES5
// var name5 =  'Matt';
// var age5 = '23';
// name5 = 'Matthew';

// // ES6
// const name6 =  'Matt';
// let age6 = '23';
// name6 = 'Matthew';
// console.log(name6);


// function driversLicence5(passedTest){
//   if(passedTest) {
//     console.log(firstName);
//     var firstName = 'John';
//     var yearOfBirth = '1983';
    
//   }
//   console.log(firstName + ' born in ' + yearOfBirth + ' can drive a car');
  
// }

// driversLicence5(true);

// function driversLicence6(passedTest){
//   console.log(firstName);
//   let firstName;
//   const yearOfBirth = '1983';
//   if(passedTest) {    
//     firstName = 'John'; 
//     console.log(firstName + ' born in ' + yearOfBirth + ' can drive a car');
//   }
  
// }

// driversLicence6(true);

// let i = 23;

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// console.log(i);

//BLOCKS
// {
//   const a = 1;
//   let b = 2;
//   var c = 3;

// }
// console.log(c);

//STRINGS
// let firstName = 'Matt';
// let lastName = 'Clark';
// let thisDate = new Date();
// thisDate = thisDate.getFullYear();
// const yearOfBirth = 1985;

// function calcAge(year) {
//   return thisDate - year;
// }
// console.log('This is ' + firstName + ' ' + lastName + ' he was born in ' + yearOfBirth + ' he is ' + calcAge(yearOfBirth));

// console.log(`This is ${firstName} ${lastName} he was born in ${yearOfBirth} he is ${calcAge(yearOfBirth)}`);


// const n = `${firstName} ${lastName}`;

// console.log(n.startsWith('M'));

//ARROW FUNCTIONS
// const years = [1983, 1985, 1990, 1992];

// var ages5 = years.map(function(el){
//   return 2020 - el;
// });

// console.log(ages5);

// let ages6 = years.map(el => 2020 - el);
// console.log(ages6);

// ages6 = years.map((el, index) => `Age element: ${index + 1} ${2020 - el}`);
// console.log(ages6);

// ages = years.map((el, index) => {
//   const now = new Date().getFullYear();
//   const age = now - el;
//   return  `Age element: ${index + 1} ${age}`;
// } );
// console.log(ages);

//ARROW FUNCTIONS 2 THIS KEYWORD/LEXICAL THIS
// var box5 = {
//   color: 'green',
//   position: 1,
//   clickMe: function() {
//     _this = this;
//     document.querySelector('.green').addEventListener('click', function(){
//       var str = "This is box number " + _this.position + ' it is ' + _this.color;
//       console.log(str);
//     });
//   }
// }
// box5.clickMe();

// const box6 = {
//   color: 'green',
//   position: 1,
//   clickMe: () => {
//     document.querySelector('.green').addEventListener('click', () => {
//       let str = `This is box number ${this.position} it is ${this.color}`;
//       console.log(str);
//     });
//   }
// }
// box6.clickMe();


// function Person(name) {
//   this.name = name;
// };
// var friends = ['Matt', 'Tom', 'Mark'];

// //ES5
// Person.prototype.myFriends5 = function(friends) {
//   //Tecnique with _this declared earlier
//   var _this = this;
//   var arr = friends.map(function(friend){
//     return _this.name + ' is friends with ' + friend;
//   }); 
//   console.log(arr);

//   //Tecnique with bind being used for this
//   var arr = friends.map(function(friend){
//     return this.name + ' is friends with ' + friend;
//   }.bind(this)); 
//   console.log(arr);

//   //Tecnique with this added as second parameter
//   var arr = friends.map(function(friend){
//     return this.name + ' is friends with ' + friend;
//   }, this); 
//   console.log(arr);
// };
// new Person('John').myFriends5(friends);

// //ES6 method
// Person.prototype.myFriends6 = function(friends) {
//   var arr = friends.map(friend => `${this.name} is friends with ${friend}`);
//   console.log(arr);
// };
// new Person('John').myFriends6(friends);


//Lecutre DESTRUCTURING
//ES5
// var john = ['John', 23];
// var name = john[0];
// var age = john[1];

//ES6
// const [name, year] = ['John', 26];
// console.log(name, year);

// const obj = {
//   firstName: 'John',
//   lastName: 'Smith'
// }

// const {firstName, lastName} = obj;
// console.log(firstName);

// const {firstName: a, lastName: b} = obj;
// console.log(a, b);

// function calcAge2(year) {
//   const age = new Date().getFullYear() - year;
//   return [age, 65 - age];
// }

// calcAge2 = year => {
//   const age = new Date().getFullYear() - year;
//   return [age, 65 - age];
// }

// const [age2, retirement] = calcAge2(1990);

// console.log(age2, retirement);


// ARRAYS IN ES6

// const boxes = document.querySelectorAll('.box');

// //es5
// var boxesArr5 = Array.prototype.slice.call(boxes);

// // boxesArr5.forEach(function(cur) {
// //   cur.style.backgroundColor = 'dodgerblue';
// // });

// //es6
// const boxesArr6 = Array.from(boxes);
// boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');


//FOR OF LOOPS
//es5
// for(var i = 0; i < boxesArr5.length; i++) {
//   if (boxesArr5[i].className !== 'box blue') {
//     boxesArr5[i].textContent = 'I changed to blue';
//   }  
// }

// for(var i = 0; i < boxesArr5.length; i++) {
//   if (boxesArr5[i].className !== 'box blue') {    
//     continue;
//   }  
//   boxesArr5[i].textContent = 'I changed to blue';
// }

//es6
// for (const cur of boxesArr6) {
//   if (!cur.className.includes('blue')) {
//     cur.textContent = 'I changed to blue';
//   }  
// }

// for (const cur of boxesArr6) {
//   if (cur.className.includes('blue')) {
//     continue;
//   }  
//   cur.textContent = 'I changed to blue';
// }

//es5
// var ages = [12, 17, 14, 21, 44, 18];
// var full = ages.map(function(cur){
//   return cur >= 18;
// });

// console.log(full);
// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);

// //es6
// console.log(ages.findIndex(cur => cur >= 18));
// console.log(ages.find(cur => cur >= 18));

//Spread operator
// function addFourAges(a, b, c, d) {
//   return a + b + c + d;
// }

// var sum1 = addFourAges(12, 17, 16, 19);
// var ages = [12, 17, 16, 19];
// var sum2 = addFourAges.apply(null, ages);
// console.log(sum1);
// console.log(sum2);

// const max3 = addFourAges(...ages);
// console.log(max3);

// const familySmith = ['John', 'Matt', 'Mark'];
// const familyMiller = ['Jack', 'Mary', 'Sarah'];
// const newFamily = [...familyMiller, ...familySmith];
// console.log(newFamily);

// const h = document.querySelector('h1');
// const boxes = document.querySelectorAll('.box');
// const elements = [h, ...boxes];
// console.log(elements);
// Array.from(elements).forEach(cur => cur.style.color = 'purple');

//Rest parmeters
//ES5
// function isFullAge() {
//   //arguments is array like, not an array. Needs to be converted
//   var argsArray = Array.prototype.slice.call(arguments);
//   argsArray.forEach(function(cur){
//     console.log((new Date().getFullYear() - cur) >= 18);
//   });
//   console.log(argsArray);
// }

// isFullAge(1990, 1999, 1965, 2005);

//es6
// function isFullAge6(...years) {
//   years.forEach(cur => console.log(new Date().getFullYear() - cur));
// }

// isFullAge6(1990, 1999, 1965, 2005);

//Rest parmeters
//ES5
// function isFullAge(limit) {
//   //arguments is array like, not an array. Needs to be converted
//   var argsArray = Array.prototype.slice.call(arguments, 1);
//   argsArray.forEach(function(cur){
//     console.log((new Date().getFullYear() - cur) >= limit);
//   });
// }

// isFullAge(21, 1999, 1965, 2005);

//ES6
// function isFullAge6(limit, ...years) {
//   years.forEach(cur => console.log(new Date().getFullYear() - cur >= limit));
// }

// isFullAge6(50, 1990, 1999, 1965, 2005);


//ES5 Default parameters
// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
//   lastName === undefined ? lastName = 'Smith' : lastName;
//   nationality === undefined ? nationality = 'Welsh' : nationality;
//   this.firstName = firstName;
//   this.yearOfBirth = yearOfBirth;
//   this.lastName = lastName;
//   this.nationality = nationality;
// }

//ES6 default parameters
// function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'Welsh') {
//   this.firstName = firstName;
//   this.yearOfBirth = yearOfBirth;
//   this.lastName = lastName;
//   this.nationality = nationality;
// }

// var johnSmith = new SmithPerson('John', 1985);
// var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spainish');
// console.log(johnSmith, emily);

// const question = new Map();
// question.set('question', 'What is your favourite football team?');
// question.set(1, 'Wolves');
// question.set(2, 'Palace');
// question.set(3, 'Arsenal');
// question.set(4, 'Man U');
// question.set('correct', 2);
// question.set(true, 'Correct answer');
// question.set(false, 'Incorrect team!');

// // if(question.has(4)){
// //   // question.delete(4);
// //   console.log('Answer 4 is here');
// // }
// // question.clear();

// console.log(question.get('question'));
// // console.log(question.size);
// // console.log(question);

// // question.forEach((value, key) => console.log(`this is ${key} and this is it's value ${value}`));
// for (let [key, value] of question.entries()) {
//   // console.log(`this is ${key} and this is it's value ${value}`);

//   if (typeof(key) === 'number') {
//     console.log(`Answers ${key}: ${value}`);
//   }
// }

// const ans = parseInt(prompt('What is the answer?'));
// console.log(question.get(ans === question.get('correct')));

//CLASSES

// var Person5 = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// }

// Person5.prototype.calculateAge = function() {
//   var age = new Date().getFullYear - this.yearOfBirth;
//   console.log(age);
// }

// var john5 = new Person5('John', 1990, 'teacher');
// console.log(john5);

// class Person6 {
//   constructor (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//   }

//   calculateAge() {
//     var age = new Date().getFullYear - this.yearOfBirth;
//     console.log(age);
//   }
// }

// const john6 = new Person6('John', 1990, 'teacher');
// console.log(john6);

//SubClasses
// var Person5 = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// }

// Person5.prototype.calculateAge = function() {
//   var age = new Date().getFullYear() - this.yearOfBirth;
//   console.log(age);
// }

// var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
//   Person5.call(this, name, yearOfBirth, job);
//   this.olympicGames = olympicGames;
//   this.medals = medals;
// }

// Athlete5.prototype = Object.create(Person5.prototype);
// Athlete5.prototype.wonMedal = function() {
//   this.medals++;
//   console.log(this.medals);
// }

// var john = new Athlete5('John', 1990, 'boxer', 3, 3);
// john.calculateAge();
// john.wonMedal();

class Person6 {
  constructor (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }
}

class Athlete6 extends Person6 {
  constructor(name, yearOfBirth, job, olympicGames, medals) {
    super(name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }

  wonMedal() {
    this.medals++
    console.log(this.medals);
  }
}

const mark = new Athlete6('Mark', 1990, 'Boxer', 3, 3);
mark.wonMedal();
mark.calculateAge();