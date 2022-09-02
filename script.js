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
let homeScreen = "Home";
let gameScreen = "Game";
let wordScreen = "Word";

//JUEGO
let palabras = ["HOLA", "CHAU", "HTML", "CSS", "JAVASCRIPT"];

function changeScreen(screen){
	if (screen == homeScreen) {
		main.classList.toggle('noDisplay');
		if (!game.classList.contains("noDisplay"))	game.classList.toggle('noDisplay');
		if (!word.classList.contains("noDisplay"))	word.classList.toggle('noDisplay');
	}
	else if (screen == gameScreen) {
		game.classList.toggle('noDisplay');
		main.classList.toggle('noDisplay');
	}
	else if (screen == wordScreen) {
		word.classList.toggle('noDisplay');
		main.classList.toggle('noDisplay');
	}
}

function createLineItems(length){
	let container = document.querySelector(".wordLines");

	for (var i = 0; i < palabras[length].length; i++) {
		let lineItem = document.createElement("div");
		lineItem.classList.toggle('lineItem');

		let word = document.createElement("textarea");
		word.classList.toggle('word');
		word.readOnly = true;

		let line = document.createElement("div");
		line.classList.toggle('line');

		lineItem.appendChild(word);
		lineItem.appendChild(line);

		container.appendChild(lineItem);
	}

}

function changeToGameScreen(){
	let len = Math.floor((Math.random()*100) % palabras.length);
	createLineItems(len);
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

btnGame.onclick = changeToGameScreen;
btnWord.onclick = changeToWordScreen;
btnGiveUp.onclick = changeToHomeScreen;
btnCancelWord.onclick = changeToHomeScreen;












