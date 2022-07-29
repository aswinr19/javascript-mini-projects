let player = {
	name:'',
	chips:100

}
let cards =[]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

const messageEl = document.getElementById("message-el")
const cardsEl = document.getElementById("cards-el")
const  sumEl = document.getElementById("sum-el")
const  playerEl = document.getElementById("player-el")
const contentEl = document.getElementById("content-el")
const modalEl = document.getElementById("modal-el")
const newCardBtn = document.getElementById("new-card-btn")

function getRandomCard(){

	let randomNumber = Math.floor( Math.random() * 13 ) +1

	if(randomNumber > 10 ){
		return 10
	}
	else if(randomNumber === 1){
		return 11
	}
	else {
		return randomNumber
	}
}

function startGame(){

	isAlive = true
	let firstCard = getRandomCard()
	let secondCard = getRandomCard()
	cards = [firstCard,secondCard]
	sum = firstCard+secondCard
	newCardBtn.classList.remove("btn-disabled")

	renderGame()
}

function renderGame(){

	cardsEl.textContent = "Cards: "

	for(let i = 0; i < cards.length; i++){
		cardsEl.textContent += cards[i]+ " "
	}

	sumEl.textContent = "Sum : "+sum

	if(sum <= 20){
		message = "Do you want to draw a new card ? "
	}else if(sum === 21){
		message = "You've got BlackJack!"
		hasBlackJack = true
		newCardBtn.classList.add("btn-disabled")
	}
	else{
		message = "You are out of the game!"
		isAlive = false
		newCardBtn.classList.add("btn-disabled")
	}

	messageEl.textContent = message

}


function newCard(){

	if(isAlive === true && hasBlackJack === false){
		let card = getRandomCard()
		sum += card
		cards.push(card)
		
		renderGame()
	}
}

function getModal(){
	contentEl.style.display = "none"
	modalEl.style.display = "block"

}

setTimeout(getModal,500);

function getName(){
	let name = document.getElementById("input-el")
	player.name = name.value
	name.value = ''
	modalEl.style.display = "none"
	contentEl.style.display = "block"
	playerEl.textContent = "hello " + player.name + ", you have $" + player.chips + " left!"
}
