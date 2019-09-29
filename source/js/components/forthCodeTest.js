const forthCodeTest = {
  init() {
    console.log('forthCodeTest');
    /*
    Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
    1. For each of them, create an object with properties for their full name, mass, and height
    2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
    3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
    Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
    GOOD LUCK 😀
    */

    let john = {
      firstName: 'John',
      height: 1.89,
      mass: 81,
      bmiCalc: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
      }
    };

    // var john = {
    //   fullName: 'John Smith',
    //   mass: 110,
    //   height: 1.95,
    //   calcBMI: function() {
    //     this.bmi = this.mass / (this.height * this.height);
    //     return this.bmi;
    //   }
    // };

    let mark = {
      firstName: 'Mark',
      height: 1.74,
      mass: 81,
      bmiCalc: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
      }
    };

    // var mark = {
    //   fullName: 'Mark Miller',
    //   mass: 78,
    //   height: 1.69,
    //   calcBMI: function() {
    //     this.bmi = this.mass / (this.height * this.height);
    //     return this.bmi;
    //   }
    // };

    if (john.bmiCalc() > mark.bmiCalc()) {
      console.log(john.firstName + ' has a higher BMI of ' + john.bmi);
    } else if (mark.bmi > john.bmi) {
      console.log(mark.firstName + ' has a higher BMI of ' + mark.bmi);
    } else {
      console.log('They have the same BMI');
    }

    console.log(john.bmi);
    // console.log(mark);
  }
};

export default forthCodeTest;
