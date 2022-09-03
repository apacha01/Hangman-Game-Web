//DIVS
let main = document.querySelector(".btnsMain");
let game = document.querySelector(".btnsGame");
let word = document.querySelector(".btnsWord");

//TEXTAREA
let wrongLetterTextarea = document.querySelector(".wrongLetters");

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
let words = ["HOLA", "CHAU", "HTML", "CSS", "JAVASCRIPT"];
let chosenWord;
let addedWord = "";
let usedLetters = [];
let won = false;
let lost = false;
let counter = 0;

function changeScreen(screen){
	if (screen == homeScreen) {
		main.classList.remove('noDisplay');
		game.classList.add('noDisplay');
		word.classList.add('noDisplay');
		gameFlag = false;
	}
	else if (screen == gameScreen) {
		game.classList.remove('noDisplay');
		main.classList.add('noDisplay');
		word.classList.add('noDisplay');
		gameFlag = true;
	}
	else if (screen == wordScreen) {
		word.classList.remove('noDisplay');
		main.classList.add('noDisplay');
		game.classList.add('noDisplay');
		gameFlag = false;
	}
}

function createLineItems(){
	let container = document.querySelector(".wordLines");

	for (var i = 0; i < chosenWord.length; i++) {
		let lineItem = document.createElement("div");
		lineItem.classList.toggle('lineItem');

		let word = document.createElement("textarea");
		word.classList.toggle('word');
		word.readOnly = true;
		word.value = chosenWord[i];
		word.color = "white";

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
	if (gameFlag)	cleanGameScreen();
	changeScreen(homeScreen);
}

function start(){
	wrongLetterTextarea.value = "";
	let len = Math.floor((Math.random()*100) % words.length);
	chosenWord = words[len];

	if (addedWord != "") chosenWord = addedWord;

	createLineItems();
}

function restart(){
	cleanGameScreen();
	start();
}

function cleanGameScreen(){
	let container = document.querySelector(".wordLines");
	let menW = document.querySelector(".winner");
	let menL = document.querySelector(".loser");
	container.innerHTML = "";
	usedLetters = [];
	won = false;
	lost = false;
	menW.classList.add('noDisplay');
	menL.classList.add('noDisplay');

	counter = 0;
	for (var i = 1; i <= 10; i++) {
		let frame = "frame" + i;
		let show = document.querySelector("."+frame);
		show.classList.add('noDisplay');
	}

	addedWord = "";
}

function checkKey(event){
	event = event || window.event;
    if (gameFlag && !won && !lost) {
    	//si no es letra me voy
    	if (event.key < 'a' || event.key > 'z') return;

    	//si ya la apreto me voy
    	if (checkLetter(event.key)) return;
    	
    	//agrego la letra a las presionadas
    	addUsedLetter(event.key);

    	//compruebo si esta la letra en la palabra
    	for (var i = 0; i < chosenWord.length; i++) {
			if (event.key == chosenWord[i].toLowerCase()) {
				show(event.key);
				checkWord();
				return;
			}
		}

		addWrongLetter(event.key);
	}
}

function show(letter){
	let letters = document.querySelector(".wordLines").children;

	for (var i = 0; i < chosenWord.length; i++) {
		if (letter == letters[i].firstChild.value.toLowerCase()) {
			letters[i].firstChild.style.color = "black";
		}
	}
}

function checkWord(){
	let letters = document.querySelector(".wordLines").children;
	
	for (var i = 0; i < chosenWord.length; i++) {
		if (!(letters[i].firstChild.style.color == "black")) return;
	}

	winner();
}

function checkLetter(letter){
	return usedLetters.includes(letter);
}

function addUsedLetter(letter){
	if (!checkLetter(letter)) usedLetters.push(letter);
}

function addWrongLetter(letter){
	counter++;
	wrongLetterTextarea.value += " " + letter.toUpperCase();
	showDoll();
	if (counter >= 10) loser();
}

function showDoll(){
	let frame = "frame" + counter;
	let show = document.querySelector("."+frame);
	show.classList.remove('noDisplay');
}

function winner(){
	let men = document.querySelector(".winner");
	men.classList.remove('noDisplay');
	won = true;
}

function loser(){
	let men = document.querySelector(".loser");
	men.classList.remove('noDisplay');
	lost = true;
}

function addWord(){
	let readWord = document.querySelector(".readWord");

	if (readWord.value.includes(" ")) {alert("Por favor ingrese una palabra sin espacios."); return;}
	if (!words.includes(readWord.value))	words.push(readWord.value.toUpperCase());
	
	addedWord = readWord.value.toUpperCase();
	changeToGameScreen();
	readWord.value = "";
}

btnGame.onclick = changeToGameScreen;
btnWord.onclick = changeToWordScreen;
btnRestart.onclick = restart;
btnGiveUp.onclick = changeToHomeScreen;
btnCancelWord.onclick = changeToHomeScreen;
btnSaveWord.onclick = addWord;

document.onkeydown = checkKey;










