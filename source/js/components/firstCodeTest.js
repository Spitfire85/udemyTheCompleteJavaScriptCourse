const firstCodeTest = {
  init() {
    // console.log('firstCodeTest');

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
