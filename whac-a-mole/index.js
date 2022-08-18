const grid = document.getElementById("grid")
const scoreEl = document.getElementById("score")
const timeEl = document.getElementById("time")

for(let i = 0; i < 16; i++){
	const square = document.createElement("div")
	square.classList.add("square")
	square.setAttribute("id",i)
	grid.appendChild(square)
}

let score = 0
let hitPosition = null
let time = 60
let timerId = null
const squares = document.querySelectorAll(".square")

function randomSquare(){

	squares.forEach( square => {
		square.classList.remove("mole")
	})

	let random = squares[ Math.floor(Math.random() *  16) ]
	random.classList.add("mole")
	hitPosition = random.id

}

squares.forEach( square => {
	square.addEventListener("mousedown" , function(){
		if(square.id == hitPosition){
			score++
			scoreEl.textContent = score
			console.log("hit")
		}
	})
})

function moveMole(){
	
	timerId = setInterval(randomSquare,400)
}

moveMole()

function countDown(){
	time--
	timeEl.textContent = time
	if(time === 0){
		alert("GAME OVER! Your'e score is "+ score)
		clearInterval(timer)
		clearInterval(timerId)
	}
}


let timer = setInterval( countDown , 1000)
