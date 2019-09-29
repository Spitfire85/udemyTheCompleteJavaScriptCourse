const thirdCodeTest = {
  init() {
    console.log('thirdCodeTest');

    /*****************************
     * CODING CHALLENGE 3
     */

    /*
    John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
    To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
    In the end, John would like to have 2 arrays:
    1) Containing all three tips (one for each bill)
    2) Containing all three final paid amounts (bill + tip).
    (NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
    GOOD LUCK 😀
    */
    // var tipArr = [];
    // var tipBillArr = [];

    // first
    // function tipCalc(billAmount) {
    //   if (billAmount < 50) {
    //     var tipAmount = (billAmount * 20) / 100;
    //     tipArr.push(tipAmount);
    //     tipBillArr.push(tipAmount + billAmount);
    //   } else if (billAmount < 200) {
    //     var tipAmount = (billAmount * 15) / 100;
    //     tipArr.push(tipAmount);
    //     tipBillArr.push(tipAmount + billAmount);
    //   } else {
    //     var tipAmount = (billAmount * 10) / 100;
    //     tipArr.push(tipAmount);
    //     tipBillArr.push(tipAmount + billAmount);
    //   }
    // }
    // console.log(tipArr, tipBillArr);

    var billArr = [124, 48, 268];
    var tipArr = [tipCalc(billArr[0]), tipCalc(billArr[1]), tipCalc(billArr[2])];
    var tipBillArr = [billArr[0] + tipArr[0], billArr[1] + tipArr[1], billArr[2] + tipArr[2]];

    // second
    function tipCalc(billAmount) {
      var percentage;
      if (billAmount < 50) {
        percentage = 0.2;
      } else if (billAmount < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }

      return percentage * billAmount;
    }

    console.log(tipArr, tipBillArr);
  }
};

export default thirdCodeTest;
