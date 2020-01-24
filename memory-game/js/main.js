let cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/-king-of-diamonds"
}
];

let cardsInPlay = [];
 let checkForMatch = function() {
   if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
 }
 let flipCard = function (cardId) {
   cardsInPlay.push(cards[cardId].rank);
    console.log("User flipped" + " " + cards[cardId].rank);

 };

 function createBoard() {
  const cardTable = document.getElementById('game-board');
  for (var i = 0; i < cards.length; i++) {
  var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    cardTable.appendChild(cardElement);

  }
};

createBoard();
