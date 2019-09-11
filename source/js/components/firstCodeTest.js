const firstCodeTest = {
  init() {
    // console.log('firstCodeTest');

    let johnHeight = 189;
    let johnMass = 81;

    let markHeight = 174;
    let markMass = 74;

    let johnBmi = johnMass / (johnHeight * johnHeight);
    let markBmi = markMass / (markHeight * markHeight);

    let bmiResult = markBmi > johnBmi;

    console.log("Mark's BMI is higher than Johns: " + bmiResult);
  }
};

export default firstCodeTest;
