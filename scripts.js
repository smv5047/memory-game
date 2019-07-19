const cards = document.querySelectorAll('.memory-card');

function flipCard () {
    console.log(`I was clicked!`);
    console.log(this); //represents the element that fired off the event
    //We want to access the class list of the memory card and 
    //toggle the flip class 
    //toggle means, if the class 'flip' isthere , remove it
    //if class isn't there, add it onto the class
    this.classList.toggle('flip');
}


cards.forEach(cards => cards.addEventListener('click', flipCard))