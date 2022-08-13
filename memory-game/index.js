const pokemon = [
  {
    name: "Articuno",
    img: "images/articuno.png",
  },
  {
    name: "Bulbasaur",
    img: "images/bulbasaur.png",
  },
  {
    name: "Butterfree",
    img: "images/butterfree.png",
  },
  {
    name: "Chansey",
    img: "images/chansey.png",
  },
  {
    name: "Charizard",
    img: "images/charizard.png",
  },
  {
    name: "Dragonair",
    img: "images/dragonair.png",
  },
  {
    name: "Dragonite",
    img: "images/dragonite.png",
  },
  {
    name: "Flareon",
    img: "images/flareon.png",
  },
  {
    name: "Fletchling",
    img: "images/fletchling.png",
  },
  {
    name: "Herdier",
    img: "images/herdier.png",
  },

  {
    name: "Articuno",
    img: "images/articuno.png",
  },
  {
    name: "Bulbasaur",
    img: "images/bulbasaur.png",
  },
  {
    name: "Butterfree",
    img: "images/butterfree.png",
  },
  {
    name: "Chansey",
    img: "images/chansey.png",
  },
  {
    name: "Charizard",
    img: "images/charizard.png",
  },
  {
    name: "Dragonair",
    img: "images/dragonair.png",
  },
  {
    name: "Dragonite",
    img: "images/dragonite.png",
  },
  {
    name: "Flareon",
    img: "images/flareon.png",
  },
  {
    name: "Fletchling",
    img: "images/fletchling.png",
  },
  {
    name: "Herdier",
    img: "images/herdier.png",
  },
];

const grid = document.getElementById("grid");
const score = document.getElementById("score");
const tries = document.getElementById("tries");

let count = 0;

let selectedPokeball = [];

let selectedPokeballId = [];

let openedPokeball = []

pokemon.sort(() => 0.5 - Math.random());

//console.log(pokemon)

function createBoard() {
  for (let i = 0; i < pokemon.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/pokeball.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  }
}

createBoard();

function renderScore(){

	score.textContent = openedPokeball.length;

	if(openedPokeball.length === 10)
	{
		alert("You won!");

	}
}
function checkForMatch(){

	const cards = document.querySelectorAll("img");

	if(selectedPokeball[0] === selectedPokeball[1]){
		cards[selectedPokeballId[0]].setAttribute("src","images/open-pokeball.png");
		cards[selectedPokeballId[1]].setAttribute("src","images/open-pokeball.png");
		cards[selectedPokeballId[0]].removeEventListener("click",flipCard);
		cards[selectedPokeballId[1]].removeEventListener("click",flipCard);
		openedPokeball.push(selectedPokeball);
		
		renderScore();	
	}
	else 
	{
		cards[selectedPokeballId[0]].setAttribute("src","images/pokeball.png");
		cards[selectedPokeballId[1]].setAttribute("src","images/pokeball.png");
	}
	selectedPokeball = [];
	selectedPokeballId = [];
}


function flipCard() {
  let id = this.getAttribute("data-id");
  //  console.log(id);
  // console.log(pokemon[id]);
  selectedPokeball.push(pokemon[id].name);
  selectedPokeballId.push(id);
  this.setAttribute("src", pokemon[id].img);
  count++;
  tries.textContent = count;
  if (selectedPokeball.length === 2) {
  	setTimeout(checkForMatch,500);
  }
  }
