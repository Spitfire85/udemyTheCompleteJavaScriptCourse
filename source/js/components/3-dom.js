const DOM = {
  init() {
    // console.log('DOM');
    /*
    GAME RULES:

    - The game has 2 players, playing in rounds
    - In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
    - BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
    - The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
    - The first player to reach 100 points on GLOBAL score wins the game

    */

    /*
    YOUR 3 CHALLENGES
    Change the game to follow these rules:
    1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
    2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
    3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
    */

    let scores = null;
    let roundScore = null;
    let activePlayer = null;
    let btnRoll = document.querySelector('.btn-roll');
    let btnHold = document.querySelector('.btn-hold');
    let btnNew = document.querySelector('.btn-new');
    let dice = document.querySelector('.dice');
    let gamePlaying = true;
    let lastDice = 0;
    let roundNumber = 100;

    btnRoll.addEventListener('click', function() {
      console.log(roundNumber);

      if (gamePlaying) {
        //Random number
        let diceNumber = Math.floor(Math.random() * 6) + 1;

        //Display result
        dice.style.display = 'block';
        dice.src = '/assets/img/dom/dice-' + diceNumber + '.png';

        if (lastDice === 6 && diceNumber === 6) {
          console.log('TEST');
          scores[activePlayer] = 0;
          document.querySelector('#current-' + activePlayer).textContent = 0;
          document.querySelector('#score-' + activePlayer).textContent = 0;
          nextPlayer();
        } else if (diceNumber !== 1) {
          roundScore += diceNumber;
          document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
          nextPlayer();
        }

        lastDice = dice;
      }
    });

    btnHold.addEventListener('click', function() {
      if (gamePlaying) {
        roundNumber = document.querySelector('.round-number').value;
        let winningScore;

        if (roundNumber) {
          winningScore = input;
        } else {
          winningScore = 100;
        }

        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        if (scores[activePlayer] >= winningScore) {
          console.log('Player ' + activePlayer + ' has won!');

          document.querySelector('#score-' + activePlayer).textContent = 'Wins!';
          btnHold.style.display = 'none';
          dice.style.display = 'none';
          btnRoll.style.display = 'none';
          document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
          gamePlaying = false;
          // reset();
        } else {
          nextPlayer();
        }
      }
    });

    btnNew.addEventListener('click', init);

    function nextPlayer() {
      roundScore = 0;
      document.getElementById('current-0').textContent = '0';
      document.getElementById('current-1').textContent = '0';

      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      document.querySelector('.player-0-panel').classList.toggle('active');
      document.querySelector('.player-1-panel').classList.toggle('active');
      dice.style.display = 'none';
      // document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
    }

    function init() {
      document.querySelector('.player-0-panel').classList.remove('active');
      document.querySelector('.player-1-panel').classList.remove('active');
      document.querySelector('.player-0-panel').classList.add('active');

      document.querySelector('.player-0-panel').classList.remove('winner');
      document.querySelector('.player-1-panel').classList.remove('winner');

      document.getElementById('current-0').textContent = '0';
      document.getElementById('current-1').textContent = '0';

      document.getElementById('score-0').textContent = '0';
      document.getElementById('score-1').textContent = '0';

      dice.style.display = 'none';
      btnRoll.style.display = 'inline';
      btnHold.style.display = 'inline';

      gamePlaying = true;
      activePlayer = 0;
      scores = [0, 0];
      roundScore = 0;
    }

    init();
  }
};

export default DOM;
