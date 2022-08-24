const grid = document.getElementById("grid");
const score = document.getElementById("score");
let width = 15;
let shooterIndex = 217; 
let invaderIndex = [ 17,18,19,20,21,22,23,24,25,26,27,33,34,35,36,37,38,39,40,41,42 ];

let i = 1;

for( let i = 0; i < 225; i++){

	const square = document.createElement("div");
	square.classList.add("square");
	grid.appendChild(square);
}


const squares = document.querySelectorAll(".square");

 squares[shooterIndex].classList.add("shooter");


function moveShooter(e){
	squares[shooterIndex].classList.remove("shooter");

	switch(e.key){
		case 'ArrowLeft' :{
			if(shooterIndex % width	!= 0){
				shooterIndex = shooterIndex -1;
			console.log(shooterIndex);
			}
			break;
		}
		case 'ArrowRight' :{
			if(shooterIndex != width*width -1 ){
			shooterIndex = shooterIndex + 1;
			console.log(shooterIndex);
			}
			break;
		}
	}
	squares[shooterIndex].classList.add("shooter");
}

document.addEventListener('keydown',moveShooter);


function renderInvader(){

	for(let i = 0; i < invaderIndex.length - 1; i++){
		squares[invaderIndex[i]].classList.add("invader");

	}
}


function moveInvader(){
	for( let i = 0 ; i < invaderIndex.length - 1; i++){
		invaderIndex[i] = invaderIndex[i] + 1;
	}
	renderInvader();
}

setInterval(moveInvader,500);
