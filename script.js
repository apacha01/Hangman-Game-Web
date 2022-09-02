//DIVS
let main = document.querySelector(".btnsMain");
let game = document.querySelector(".btnsGame");
let word = document.querySelector(".btnsWord");

//BOTONES
let btnGame = document.getElementById('btnGame');
let btnWord = document.getElementById('btnUseWord');
let btnRestart = document.getElementById('btnRestart');
let btnGiveUp = document.getElementById('btnGiveUp');
let btnSaveWord = document.getElementById('btnSaveWord');
let btnCancelWord = document.getElementById('btnCancelWord');

//VARIABLES
let homeScreen	= "Home";
let gameScreen	= "Game";
let wordScreen	= "Word";
let gameFlag	= false;

//JUEGO
let palabras = ["HOLA", "CHAU", "HTML", "CSS", "JAVASCRIPT"];
let palabraElegida;

function changeScreen(screen){
	if (screen == homeScreen) {
		main.classList.toggle('noDisplay');
		if (gameFlag)	game.classList.toggle('noDisplay');
		else	word.classList.toggle('noDisplay');
		gameFlag	= false;
	}
	else if (screen == gameScreen) {
		gameFlag	= true;
		game.classList.toggle('noDisplay');
		main.classList.toggle('noDisplay');
	}
	else if (screen == wordScreen) {
		gameFlag	= false;
		word.classList.toggle('noDisplay');
		main.classList.toggle('noDisplay');
	}
}

function createLineItems(length){
	let container = document.querySelector(".wordLines");

	for (var i = 0; i < palabraElegida.length; i++) {
		let lineItem = document.createElement("div");
		lineItem.classList.toggle('lineItem');

		let word = document.createElement("textarea");
		word.classList.toggle('word');
		word.readOnly = true;
		word.value = palabraElegida[i];

		let line = document.createElement("div");
		line.classList.toggle('line');

		lineItem.appendChild(word);
		lineItem.appendChild(line);

		container.appendChild(lineItem);
	}
}

function changeToGameScreen(){
	start();
	changeScreen(gameScreen);
}

function changeToWordScreen(){
	changeScreen(wordScreen);
}

function changeToHomeScreen(){
	let container = document.querySelector(".wordLines");
	container.innerHTML = "";
	changeScreen(homeScreen);
}

function start(){
	let len = Math.floor((Math.random()*100) % palabras.length);
	palabraElegida = palabras[len];
	createLineItems(len);
}

function restart(){
	let container = document.querySelector(".wordLines");
	container.innerHTML = "";
	start();
}

function checkKey(event){
	event = event || window.event;
    if (gameFlag) {
    	if (event.keyCode > 90 || event.keyCode < 65) return;
    	
    	for (var i = 0; i < palabraElegida.length; i++) {
			if (event.keyCode == palabraElegida.charCodeAt(i)) {
				console.log("bien");
			}
		}
	}
}

btnGame.onclick = changeToGameScreen;
btnWord.onclick = changeToWordScreen;
btnRestart.onclick = restart;
btnGiveUp.onclick = changeToHomeScreen;
btnCancelWord.onclick = changeToHomeScreen;

document.onkeydown = checkKey;










