// Assignment 1 | COMP1073 Client-Side JavaScript

/* letiables
-------------------------------------------------- */
// Create a new speechSynthesis object
let synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
let option1 = ['The Turkey', 'Mom', 'Dad', 'The Dog', 'My Teacher', 'The Elephant', 'The Cat'];
let option2 = ['Sat On', 'Ate', 'Danced With', 'Saw', 'Doesnt Like', 'Kissed'];
let option3 = ['A Funny', 'A Scary', 'A Goofy', 'A Slimy', 'A Barking', 'A Fat'];
let option4 = ['Goat', 'Monkey', 'Fish', 'Cow', 'Frog', 'Bug', 'Worm' ];
let option5 = ['On The Moon', 'On The Chair', 'In My Spaghetti', 'In My Soup', 'On The Grass', 'In My Shoes'];

// variables for each button
let speakButton1 = document.querySelector('.button1');

let speakButton2 = document.querySelector('.button2');

let speakButton3 = document.querySelector('.button3');

let speakButton4 = document.querySelector('.button4');

let speakButton5 = document.querySelector('.button5');

let randomize = document.querySelector('.randomize');

let repeat = document.querySelector('.repeat');


/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	let utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above let textToSpeak
speakButton1.onclick = function() {
	let speak1 = option1[Math.floor(Math.random()*option1.length)];
	speakNow(speak1);
	let bttnLabel = document.querySelector('.button1');
	bttnLabel.innerHTML = speak1;
	// testing section
	let storyPart = speak1;
	document.querySelector('p').innerHTML = storyPart;

	// testing section done
}

speakButton2.onclick = function() {
	let speak2 = option2[Math.floor(Math.random()*option2.length)];
	speakNow(speak2);
	let bttnLabel = document.querySelector('.button2');
	bttnLabel.innerHTML = speak2;
	let storyPart = speak2;
	document.querySelector('p').innerHTML += ' ' + speak2;
}

speakButton3.onclick = function() {
	let speak3 = option3[Math.floor(Math.random()*option3.length)];
	speakNow(speak3);
	let bttnLabel = document.querySelector('.button3');
	bttnLabel.innerHTML = speak3;

	document.querySelector('p').innerHTML += ' ' + speak3;
}

speakButton4.onclick = function() {
	let speak4 = option4[Math.floor(Math.random()*option4.length)];
	speakNow(speak4);
	let bttnLabel = document.querySelector('.button4');
	bttnLabel.innerHTML = speak4;
	document.querySelector('p').innerHTML += ' ' + speak4;

}

speakButton5.onclick = function() {
	let speak5 = option5[Math.floor(Math.random()*option5.length)];
	speakNow(speak5);
	let bttnLabel = document.querySelector('.button5');
	bttnLabel.innerHTML = speak5;
	document.querySelector('p').innerHTML += ' ' + speak5;

}

randomize.onclick = function() {
	let speak1 = option1[Math.floor(Math.random()*option1.length)];
	let speak2 = option2[Math.floor(Math.random()*option2.length)];
	let speak3 = option3[Math.floor(Math.random()*option3.length)];
	let speak4 = option4[Math.floor(Math.random()*option4.length)];
	let speak5 = option5[Math.floor(Math.random()*option5.length)];
	let randomStory = speak1 + speak2 + speak3 + speak4 + speak5;
	speakNow(randomStory);
	randomStory = speak1 +' '+ speak2 +' '+ speak3 +' '+ speak4 +' '+ speak5;
	document.querySelector('p').innerHTML = randomStory;

}

repeat.onclick = function() {
	let repeat = document.querySelector('p').innerHTML
	speakNow(repeat);
}
