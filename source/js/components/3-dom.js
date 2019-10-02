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

    let scores = [0, 0];
    let roundScore = 0;
    let activePlayer = 1;
    let playerScore = document.querySelector('#current-'+ activePlayer);
    // playerScore.innerHTML = '<em>' + diceNumber + '</em>';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    let dice = document.querySelector('.dice');
    dice.style.display='none';



    let btnRoll = document.querySelector('.btn-roll');
    btnRoll.addEventListener('click', function() {
      //Random number
      let diceNumber = Math.floor(Math.random() * 6) + 1;  

      //Display result
      dice.style.display='block';
      dice.src = '/assets/img/dom/dice-' + diceNumber + '.png'

      //Update round score unless it is 1
      if (diceNumber !== 1) {
        console.log('Not one');
      } else {
        console.log('SHIT! IT\'S ONE!');
      }
    });

   


  }
};

export default DOM;
