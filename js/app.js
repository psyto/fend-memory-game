/*
getElementById()
getElementsByClassName()
getElementsByTagName()
querySelector()
querySelectorAll()

createElement()
appendChild()
createTextNode()
insertAdjacentHMTL()

removeChild()
remove()

firstElementChild()
parentElement()

setAttribute()

*/

/*
 * Create a list that holds all of your cards
 */
let holds = [
"fa fa-diamond",
"fa fa-paper-plane-o",
"fa fa-anchor",
"fa fa-bolt",
"fa fa-cube",
"fa fa-anchor",
"fa fa-leaf",
"fa fa-bicycle",
"fa fa-diamond",
"fa fa-bomb",
"fa fa-leaf",
"fa fa-bomb",
"fa fa-bolt",
"fa fa-bicycle",
"fa fa-paper-plane-o",
"fa fa-cube"
];

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
holds = shuffle(holds);

let deck = document.querySelector('.deck');

for (hold of holds) {
  let listItem = document.createElement('li');
  listItem.setAttribute('class', 'card');

  let item = document.createElement('i');
  item.setAttribute('class', hold);

  listItem.appendChild(item);
  deck.appendChild(listItem);
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

let tryCount = 0;

const moves = document.querySelector('.moves');
moves.innerHTML = tryCount;

function incrementCount() {
  tryCount++;
  moves.innerHTML = tryCount;
}

console.log(`You win at ${tryCount} try.`);

const restart = document.querySelector('.restart');
restart.addEventListener('click', event => {

})

/*
 Set up the event listener for a card. If a card is clicked:
*/
deck.addEventListener('click', event => {
  const clickTarget = event.target;
  if (isClickValid(clickTarget)) {
    toggleCard(clickTarget);
    pushSelectedCard(clickTarget);
    if (selectedCards.length === 2) {
      checkMatch(clickTarget);
      incrementCount();
    }
  }
})

function isClickValid(clickTarget) {
  return (
    clickTarget.classList.contains('card') && !clickTarget.classList.contains('match') && selectedCards.length < 2 && !selectedCards.includes(clickTarget)
  );
}

/*
 Display the card's symbol (put this functionality in another function that you call from this one)
*/
function toggleCard(clickTarget) {
  clickTarget.classList.toggle('open');
  clickTarget.classList.toggle('show');
}

/*
 Add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
*/
let selectedCards = [];

function pushSelectedCard(clickTarget) {
  selectedCards.push(clickTarget);
  console.log(selectedCards);
}

/*
Start by building a very simple grid of cards.
Don't worry about styling, just get something clickable on the page.
*/

/*
Figure out the HTML needed to represent a card. Remember, you have to represent two sides of the card. Are you going to have two separate elements stacked on top of each other?
*/

/*
Add the functionality to handle clicks.
This should reveal the hidden side of each card.
*/

/*
Work on the matching logic. How does your game "know" if a player guesses correctly or incorrectly?

 If the list already has another card, check to see if the two cards match

 If the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)

 If the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)

 Increment the move counter and display it on the page (put this functionality in another function that you call from this one)
*/

function checkMatch() {
  if (
    selectedCards[0].firstElementChild.className === selectedCards[1].firstElementChild.className
  ) {
    selectedCards[0].classList.toggle('match');
    selectedCards[1].classList.toggle('match');
    selectedCards = [];
  } else {
    setTimeout(() => {
      toggleCard(selectedCards[0]);
      toggleCard(selectedCards[1]);
      selectedCards = [];
    }, 1000);
  }
}

/*
Work on the winning condition.
 If all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
*/
