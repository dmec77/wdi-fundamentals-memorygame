 console.log("Up and running!");

 /*var cardOne = "queen";
 var cardTwo = "queen";
 var cardThree = "king";
 var cardFour = "king";
   console.log("User flipped " + cardOne);*/

 var cards = [
 	{
       rank: 'queen',
       suit: 'hearts',
       cardImage: 'images/queen-of-hearts.png'
   },
   {
       rank: 'queen',
       suit: 'diamonds',
       cardImage: 'images/queen-of-diamonds.png'
   },
   {
       rank: 'king',
       suit: 'hearts',
       cardImage: 'images/king-of-hearts.png'
   },
   {
       rank: 'king',
       suit: 'diamonds',
       cardImage: 'images/king-of-diamonds.png'
   },	

 ];
 var cardsInPlay = [];

 var checkForMatch = function() {
 	 	cardsInPlay.push(cards.rank);

 	if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
 		alert("You found a match!");
 	} else {
 		alert("Sorry, try again!");
 	};
		

 var flipCard = function(cardId); {
 	console.log("User flipped " + cards[cardId].rank);
 	checkForMatch();
};

 	console.log(cards.cardImage);
 	console.log(cards.suit);

 var createBoard = function() {
 	for (var i = 0; i < cards.length; i++) {
 		var cardElement = document.createElement('img');
 		cardElement.setAttribute('src', 'images/back.png');
 		i.setAttribute('data-id', '[0]');
 		cardElement.addEventListener('click', flipCard);
 		game-board.appendChild(cardElement);
 	}};

 	createBoard();
 	


 	

	





 




