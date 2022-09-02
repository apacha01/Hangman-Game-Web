//DIVS
var main = document.querySelector(".btnsMain");
var game = document.querySelector(".btnsGame");
var word = document.querySelector(".btnsWord");

//BOTONES
var btnGame = document.getElementById('btnGame');
var btnWord = document.getElementById('btnUseWord');
var btnRestart = document.getElementById('btnRestart');
var btnGiveUp = document.getElementById('btnGiveUp');
var btnSaveWord = document.getElementById('btnSaveWord');
var btnCancelWord = document.getElementById('btnCancelWord');

//VARIABLES
var homeScreen = "Home";
var gameScreen = "Game";
var wordScreen = "Word";

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

function changeToGameScreen(){
	changeScreen(gameScreen);
}

function changeToWordScreen(){
	changeScreen(wordScreen);
}

function changeToHomeScreen(){
	changeScreen(homeScreen);
}

btnGame.onclick = changeToGameScreen;
btnWord.onclick = changeToWordScreen;
btnGiveUp.onclick = changeToHomeScreen;
btnCancelWord.onclick = changeToHomeScreen;












