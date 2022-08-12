const computerChoiceEl = document.getElementById("computer-choice")
const userChoiceEl = document.getElementById("user-choice")
const resultEl = document.getElementById("result")
const btns = document.querySelectorAll("button")
let userChoice
let computerChoice
let result 

btns.forEach(btn => btn.addEventListener("click",function(e){
	userChoice = e.target.id
	userChoiceEl.innerHTML = userChoice

	generateRandomNumber()
	getResult()
}
))


function generateRandomNumber(){

	let randomNumber = Math.floor(Math.random() * 3) +1
	
	if(randomNumber == 1){
		computerChoice = "rock"
	}
	else if(randomNumber == 2){
		computerChoice = "paper"
	}
	else if(randomNumber = 3){
		computerChoice = "scissors"
	}
	console.log(randomNumber)

	computerChoiceEl.innerHTML = computerChoice
}

function getResult(){

	if(userChoice === computerChoice){
		result = "It's a draw"
	}
	else if(userChoice == "rock" && computerChoice == "paper"){
		result = "You've lost"
	}
	else if(userChoice == "paper" && computerChoice == "scissors"){
		result = "You've lost"
	}
	else if(userChoice == "scissors" &&  computerChoice == "rock"){
		result = "You've lost"
	}
	else if(userChoice == "rock" && computerChoice == "scissors"){
		result = "You've won!"
	}
	else if(userChoice == "paper" && computerChoice == "rock"){
		result = "You've won!"
	}
	else if(userChoice == "scissors" && computerChoice == "paper"){
		result = "You've won!"
	}

	resultEl.innerHTML = result

}
