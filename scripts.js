const cards = document.querySelectorAll('.memory-card');

// To determine if flipped card is players first flipped card

let hasFlippedCard = false;
let firstCard, secondCard;



function flipCard () {
    console.log(this); //represents the element that fired off the event
    //We want to access the class list of the memory card and 
    //toggle the flip class 
    //toggle means, if the class 'flip' isthere , remove it
    //if class isn't there, add it onto the class
    this.classList.toggle('flip');

    if (!hasFlippedCard) {
        //firstcard
        hasFlippedCard = true;
        firstCard = this;

        
    } else  {
        hasFlippedCard = false;
        secondCard = this;

        console.log(firstCard, secondCard);
    }

    //do cards match
    //Check if dataset from 1st card and 2nd card are the same
    //If they are, we remove event listener so it can't move anymore
    //If not, we will unflipped to original state
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        //it's a match
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
    } else {
        //not a match
        setTimeout(() =>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        },1500);
    }
};


cards.forEach(cards => cards.addEventListener('click', flipCard))