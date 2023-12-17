let firstCard = getRandomCard();
let secondCard = getRandomCard();
let sum = firstCard + secondCard;
let cards = [firstCard,secondCard]
let hasBlackJack = false;
let isAlive = true
let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl =  document.getElementById("card-el")

function startGame(){
    renderGame()
}

function getRandomCard() {
    if ((Math.floor(Math.random()*13) + 1) === 1) {
        return 11
    }
    else if ((Math.floor(Math.random()*13) + 1) > 10) {
        return 10
    }
    else {
        return Math.floor(Math.random()*13) + 1
    }
    
}
function renderGame() {

    cardsEl.textContent = "Cards :"
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum : " + sum
    if (sum <= 20 ) {
        message = "Do you want to draw a new card ? "
    } else if (sum === 21) {
        message = "Wohoo! You've got BlackJack!"
        hasBlackJack = true;
    } else if (sum > 21) {
        message = "You are out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    let card = getRandomCard();
    sum+=card;
    cards.push(card);
    renderGame()
}