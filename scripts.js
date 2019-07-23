
const cards = document.querySelectorAll('.memory-card');
// To determine if flipped card is players first flipped card
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;



function flipCard () {
    // The below will stop the flipCard function if the board is locked
    if (lockBoard) return;
    if (this === firstCard) return;
    console.log(this); //represents the element that fired off the event
    //We want to access the class list of the memory card and 
    //toggle the flip class 
    //toggle means, if the class 'flip' isthere , remove it
    //if class isn't there, add it onto the class
    this.classList.add('flip');

    if (!hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        firstCard = this;

    } else  {
        
        secondCard = this;

        checkForMatch();
    }


};

function checkForMatch() {
    //do cards match
    //Check if dataset from 1st card and 2nd card are the same
    //If they are, we remove event listener so it can't move anymore
    //If not, we will unflipped to original state
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        disableCards();
    } else {
        unFlipCards();
    }
};

function disableCards() {
        //it's a match
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);

        resetBoard();
}

function unFlipCards () {
        lockBoard = true;
        //not a match
        setTimeout(() =>{
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');

            resetBoard();
            },1500);
};

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// By putting parehthesis around the entire function
//We've turned it into an IIFE
//This will cause it to be invoked right after its declared
//This way the board is shuffled before it starts

(function shuffle () {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

window.onload = function() {
    var hour = 2;
    var sec = 60;
    setInterval(function() {
      document.getElementById("timer").innerHTML = hour + " : " + sec;
      sec--;
      if (sec == 00) {
        hour--;
        sec = 60;
        if (hour == 0) {
          hour = 2;
        }
      }
    }, 1000);
  }


cards.forEach(cards => cards.addEventListener('click', flipCard))