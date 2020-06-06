
let min         = 1,
    max         = 10,
    winningNum  = getRandomNum(min, max),
    guessesLeft = 3;


let   wrapper    = document.querySelector('#wrapper'),
      minNum     = document.querySelector('.minNum'),
      maxNum     = document.querySelector('.maxNum');
      submitBtn  = document.querySelector('#submitBtn'),
      inputField = document.querySelector('#inputField'),
      message    = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

wrapper.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});

submitBtn.addEventListener('click', function(){

  let guess = parseInt(inputField.value);
  
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  if(guess === winningNum){

    gameOver(true, `${winningNum} is correct, YOU WIN!`);

  } else {

    guessesLeft -= 1;

    if(guessesLeft === 0){

      gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
    } else {

        inputField.style.borderColor = 'red';

        inputField.value = '';

      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
    }
  }
});

function gameOver(won, msg){

  let color;

  won === true ? color = 'green' : color = 'red';

  inputField.disabled = true;

  inputField.style.borderColor = color;

  message.style.color = color;

  setMessage(msg);

  submitBtn.value      = 'Play Again';
  submitBtn.className += 'play-again';
}

function getRandomNum(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}