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


function Person(name) {
  this.name = name;
};
var friends = ['Matt', 'Tom', 'Mark'];

//ES5
Person.prototype.myFriends5 = function(friends) {
  //Tecnique with _this declared earlier
  var _this = this;
  var arr = friends.map(function(friend){
    return _this.name + ' is friends with ' + friend;
  }); 
  console.log(arr);

  //Tecnique with bind being used for this
  var arr = friends.map(function(friend){
    return this.name + ' is friends with ' + friend;
  }.bind(this)); 
  console.log(arr);

  //Tecnique with this added as second parameter
  var arr = friends.map(function(friend){
    return this.name + ' is friends with ' + friend;
  }, this); 
  console.log(arr);
};
new Person('John').myFriends5(friends);

//ES6 method
Person.prototype.myFriends6 = function(friends) {
  var arr = friends.map(friend => `${this.name} is friends with ${friend}`);
  console.log(arr);
};
new Person('John').myFriends6(friends);



