const es6 = {
  init: function() {
    console.log('es6');
    // Lecture Let and Const
    // ES5
    var name5 =  'Matt';
    var age5 = '23';
    name5 = 'Matthew';

    // ES6
    const name6 =  'Matt';
    let age6 = '23';
    name6 = 'Matthew';
    console.log(name6);
  }
};

export default es6;
