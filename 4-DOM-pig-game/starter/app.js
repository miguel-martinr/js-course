/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice, gamePlaying, mem;





init();

//Hacer que no se vea el dado del centro
document.querySelector(".dice").style.display = "none";

//Event Listener 
document.querySelector(".btn-roll").addEventListener("click", btnRoll);
document.querySelector(".btn-hold").addEventListener("click", btnHold);
document.querySelector(".btn-new").addEventListener("click", init);







function init() {
  upPlayerScore('0', '0');
  upPlayerScore('1', '0');
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  
  
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  
  activePlayer = 0;
  roundScore = 0;
  activePlayer = 0;
  score = [0,0];
  gamePlaying = true;
  mem = 0;
}

function btnRoll() {
  if (gamePlaying) {
    //1. Random number
    dice = Math.floor(Math.random() * 6) + 1;
    //2. Display the result
    var img_src = 'dice-' + dice + '.png';  
    var diceDOM = document.querySelector('.dice');
    diceDOM.src = img_src;
    diceDOM.style.display = 'block';
    
    //3. Update the round score IF  the rolled number was NOT a 1
    if (dice !== 1) {
      if ((dice === 6) && (mem === 6)) {
        upPlayerScore(activePlayer, 0);
        score[activePlayer] = 0;
        changePlayer();
      } else {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        mem = dice;  
      }
    } else {
      changePlayer();
      document.querySelector(".dice").style.display = "none";
    }
  }
}
function btnHold() {
  if (gamePlaying) {
    score[activePlayer] += roundScore;
    upPlayerScore(activePlayer, score[activePlayer]);
    
    if (score[activePlayer] >= 100) {
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    } else {
      changePlayer();
    }
  }
}

function changePlayer() {
  roundScore = 0;
  document.querySelector('#current-' + activePlayer).textContent = roundScore;
  activePlayer === 1 ? activePlayer-- : activePlayer++;
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  hisory = 0;
}

function upPlayerScore(player, value) {
  document.querySelector('#score-' + player).textContent = value;
}
/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/




//1. 
//Guardar lo que salió antes 


