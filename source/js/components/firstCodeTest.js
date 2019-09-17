const firstCodeTest = {
  init() {
    // console.log('firstCodeTest');
    /*
    Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
    1. Store Mark's and John's mass and height in variables
    2. Calculate both their BMIs
    3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
    4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
    GOOD LUCK 😀
    */

    let johnHeight = 1.89;
    let johnMass = 81;

    let markHeight = 1.74;
    let markMass = 74;

    let johnBmi = johnMass / (johnHeight * johnHeight);
    let markBmi = markMass / (markHeight * markHeight);

    console.log("John's BMI: " + johnBmi);
    console.log("Mark's BMI: " + markBmi);

    let bmiResult = markBmi > johnBmi;

    if (markBmi > johnBmi) {
      console.log("Mark's BMI is higher than John's: " + bmiResult);
    } else {
      console.log("Mark's BMI is lower than John's: " + bmiResult);
    }

    // console.log("Mark's BMI is higher than John's: " + bmiResult);

    let firstName = 'John';
    let civilStatus = 'single';

    if (civilStatus === 'married') {
      console.log(firstName + ' is married');
    } else {
      console.log(firstName + ' is not married');
    }

    let isMarried = false;

    if (isMarried) {
      console.log(firstName + ' is married');
    } else {
      console.log(firstName + ' is not married');
    }
  }
};

export default firstCodeTest;
