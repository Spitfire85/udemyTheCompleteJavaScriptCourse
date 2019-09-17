const secondCodeTest = {
  init() {
    console.log('secondCodeTest');
    /*
    John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
    1. Calculate the average score for each team
    2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
    3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
    4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
    5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
    GOOD LUCK 😀
    */

    let johnGame1 = 89;
    let johnGame2 = 120;
    let johnGame3 = 104;
    let johnGameAverage = (johnGame1 + johnGame2 + johnGame3) / 3;

    let mikeGame1 = 116;
    let mikeGame2 = 94;
    let mikeGame3 = 123;
    let mikeGameAverage = (mikeGame1 + mikeGame2 + mikeGame3) / 3;

    let maryGame1 = 97;
    let maryGame2 = 134;
    let maryGame3 = 105;
    let maryGameAverage = (maryGame1 + maryGame2 + maryGame3) / 3;

    if (johnGameAverage === mikeGameAverage) {
      console.log("John's team " + johnGameAverage + " Mikes's team " + mikeGameAverage + '. The game is a draw');
    } else if (johnGameAverage < mikeGameAverage) {
      console.log("John's team " + johnGameAverage + " Mikes's team " + mikeGameAverage + ". Mike's team won");
    } else if (johnGameAverage > mikeGameAverage) {
      console.log("John's team " + johnGameAverage + " Mikes's team " + mikeGameAverage + ". John's team won");
    }

    switch (true) {
      case mikeGameAverage > johnGameAverage && maryGameAverage:
        console.log(
          "Mary's team " +
            maryGameAverage +
            "John's team " +
            johnGameAverage +
            " Mikes's team " +
            mikeGameAverage +
            ". Mike's team won"
        );
        break;
      case johnGameAverage > mikeGameAverage && maryGameAverage:
        console.log(
          "Mary's team " +
            maryGameAverage +
            " John's team " +
            johnGameAverage +
            " Mikes's team " +
            mikeGameAverage +
            ". Johns's team won"
        );
        break;
      case maryGameAverage > mikeGameAverage && johnGameAverage:
        console.log(
          "Mary's team " +
            maryGameAverage +
            " John's team " +
            johnGameAverage +
            " Mikes's team " +
            mikeGameAverage +
            ". Mary's team won"
        );
        break;
      default:
        console.log(
          "Mary's team " +
            maryGameAverage +
            " John's team " +
            johnGameAverage +
            " Mikes's team " +
            mikeGameAverage +
            '. The game is a draw'
        );
    }
  }
};

export default secondCodeTest;
