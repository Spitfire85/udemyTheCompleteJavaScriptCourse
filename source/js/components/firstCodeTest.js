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

    console.log("Mark's BMI is higher than John's: " + bmiResult);
  }
};

export default firstCodeTest;
