/**
Tuyet-Ngoc Le
	CSC 2463
	Final Project
**/

var c,d,e,f,g,a,b;
var seq;
var synth;
var singleSynth;

var isPlaying = false;
var isRecording = false;
var stop = true;

var buttonColorPlay;
var buttonColorRec;
var buttonColorStop;
var colorC, colorD, colorE, colorF, colorG, colorA, colorB;

var songs = [];
var song1, song2, song3, song4, song5;
var playerAnswer;
var songPlaying;
var songCount = 0;
var playerCorrect = false;


function setup(){
	buttonColorPlay = color(255);
	buttonColorRec = color(255);
	buttonColorStop = color(255);

	colorC = color(0);
	colorD = color(0);
	colorE = color(0);
	colorF = color(0);
	colorG = color(0);
	colorA = color(0);
	colorB = color(0);

	createCanvas(720, 480);
	background(255);

	playerAnswer = [];

	synth = new Tone.PolySynth(4, Tone.MonoSynth).toMaster();

	singleSynth = new Tone.Synth().toMaster();

	Tone.Transport.bpm = 100;
	//Tone.Transport.schedule(triggerSynth, 0);

	song1 = ['d4', 'e4', 'd4', 'a4', 'g4', 'b4', 'c4', 'g4'];
	song2 = ['a4', 'g4', 'a4', 'b4', 'd4', 'd4', 'b4', 'g4'];
	song3 = ['a4', 'g4', 'e4', 'a4', 'c4', 'd4', 'd4', 'b4'];
	song4 = ['a4', 'c4', 'f4', 'g4', 'd4', 'a4', 'b4', 'a4'];
	song5 = ['c4', 'd4', 'f4', 'c4', 'e4', 'g4', 'b4', 'e4'];
	songs = [song1, song2, song3, song4, song5];
}

function draw(){

	songPlaying = songs[songCount];
	seq = new Tone.Sequence(synthNotes, songPlaying, '8n');
	seq.start(0).stop('1m');

	musicLine(40, 230);
	noteC(70*2);
	noteD(70*3);
	noteE(70*4);
	noteF(70*5);
	noteG(70*6);
	noteA(70*7);
	noteB(70*8);

	if(isPlaying == true){
		//PLACE PLAYING ANIMATION HERE
	}
	if( isRecording == true){
		//PLACE RECORDING ANIMATION HERE
	}
	if(stop == true){
		//PLACE IDLE ANIMATION HERE
	}

	playButton();
	recordButton();
	stopButton();

}

//AUDIO
function synthNotes(time, note){
	synth.triggerAttackRelease(note, '8n', time);
}

function triggerSynth(time){
//	synth.triggerAttackRelease('C4', '8n', time);
}

//GRAPHIC
function keyPressed(){
	//console.log(key);
	if(keyCode == 49){
		console.log(songPlaying);
		console.log(songCount);
		for(var i = 0; i < songPlaying.length; i++){
			console.log(seq.at(i).value);
		}
	}
	if(keyCode == 67){
		colorC = color(161, 88, 220);
		colorD = color(0);
		colorE = color(0);
		colorF = color(0);
		colorG = color(0);
		colorA = color(0);
		colorB = color(0);
		singleSynth.triggerAttackRelease("C4", "8n");
	}
	else if(keyCode == 68){
		colorC = color(0);
		colorD = color(161, 88, 220);
		colorE = color(0);
		colorF = color(0);
		colorG = color(0);
		colorA = color(0);
		colorB = color(0);
		singleSynth.triggerAttackRelease("D4", "8n");

	}
	else if(keyCode == 69){
		colorC = color(0);
		colorD = color(0);
		colorE = color(161, 88, 220);
		colorF = color(0);
		colorG = color(0);
		colorA = color(0);
		colorB = color(0);
		singleSynth.triggerAttackRelease("E4", "8n");
	}
	else if(keyCode == 70){
		colorC = color(0);
		colorD = color(0);
		colorE = color(0);
		colorF = color(161, 88, 220);
		colorG = color(0);
		colorA = color(0);
		colorB = color(0);
		singleSynth.triggerAttackRelease("F4", "8n");
	}
	else if(keyCode == 71){
		colorC = color(0);
		colorD = color(0);
		colorE = color(0);
		colorF = color(0);
		colorG = color(161, 88, 220);
		colorA = color(0);
		colorB = color(0);
		singleSynth.triggerAttackRelease("G4", "8n");
	}
	else if(keyCode == 65){
		colorC = color(0);
		colorD = color(0);
		colorE = color(0);
		colorF = color(0);
		colorG = color(0);
		colorA = color(161, 88, 220);
		colorB = color(0);
		singleSynth.triggerAttackRelease("A4", "8n");
	}
	else if(keyCode == 66){
		colorC = color(0);
		colorD = color(0);
		colorE = color(0);
		colorF = color(0);
		colorG = color(0);
		colorA = color(0);
		colorB = color(161, 88, 220);
		singleSynth.triggerAttackRelease("B4", "8n");
	}
	if(isRecording == true && stop == false){
		append(playerAnswer, key.toLowerCase() + "4");
		console.log(playerAnswer);
	}
}

function mousePressed(){
	if((mouseX > width / 20) && (mouseX < (width / 20) + 50) &&
		(mouseY > 400) && (mouseY < 400 + 50)){
			isPlaying = true;
			print("Playing");

			buttonColorPlay = color(100);
			buttonColorRec = color(255);
			buttonColorStop = color(255);

			Tone.Transport.start();
			console.log("Notes being played: " + songPlaying);
/*
			for(var i = 0; i < songPlaying.length; i++){
				if(songPlaying[i] == 'c4'){
					print("c");
				}
				if(songPlaying[i]  == 'd4'){
					print("d");
				}
				if(songPlaying[i]  == 'e4'){
					print("e");
				}
				if(songPlaying[i]  == 'f4'){
					print("f");
				}
				if(songPlaying[i]  == 'g4'){
					print("g");
				}
				if(songPlaying[i]  == 'a4'){
					print("a");
				}
				if(songPlaying[i]  == 'b4'){
					print("b");
				}
			}*/
	}
	if((mouseX > width / 7) && (mouseX < (width / 7) + 50) &&
		(mouseY > 400) && (mouseY < 400 + 50)){
			isRecording = true;
			stop = false;
			
			Tone.Transport.stop();
			playerAnswer = [];
			print("Recording");

			buttonColorRec = color(100);
			buttonColorPlay = color(255);
			buttonColorStop = color(255);

			console.log("Song Playing: " + songPlaying);
			console.log("Song Count: " + songCount);
		}
	if((mouseX > width / 4.6) && (mouseX < (width / 4.6) + 50) &&
		(mouseY > 400) && (mouseY < 400 + 50)){
			stop = true;
			print("Stopped");
			buttonColorStop = color(100);
			buttonColorPlay = color(255);
			buttonColorRec = color(255);

			console.log("Song Count: " + songCount);

			Tone.Transport.stop();
			var correctCount = 0;
			if(stop = true){
				for(var i = 0; i < songPlaying.length; i++){
					if(playerAnswer[i] == songPlaying[i]){
						correctCount++;
					}
				}
				if(correctCount == songPlaying.length){
					console.log("CORRECT");
					playerCorrect = true;
				}
				if(correctCount != songPlaying.length){
					console.log("WRONG");
					playerCorrect = false;
				}
				if(playerCorrect){
					songCount++;
				}
			}
		}
}

function playButton(){
	fill(buttonColorPlay);
	stroke(0);
	strokeWeight(2);
	rect(width / 20, 400, 50, 50, 10);

	fill(137, 253, 109);
	triangle(width / 13, 410, width / 13, 440, width / 10, 425);
}

function recordButton(){
	fill(buttonColorRec);
	stroke(0);
	strokeWeight(2);
	rect(width / 7.5, 400, 50, 50, 10);

	fill(250, 16, 76);
	ellipse(width / 6, 425, 30, 30);
}

function stopButton(){
	fill(buttonColorStop);
	stroke(0);
	strokeWeight(2);
	rect(width / 4.6, 400, 50, 50, 10);

	fill(250, 16, 76);
	rect(width / 4.25, 413, 25, 25);
}

function musicNote(x,y, c){
	fill(c);
	ellipse(x,y,15*2, 25);
	rect(x+8, y-58, 7, 30*2);
	//rect(x+5, y-35, 20, 8);
}

function musicLine(x, y){
	fill(0);
	noStroke();
	rect(x, y-100, 600, 3);
	rect(x, y-125, 600, 3);
	rect(x, y-150, 600, 3);
	rect(x, y-175, 600, 3);
	rect(x, y-200, 600, 3);
}
//each note is 40 pixel apart
function noteC(x){
	rect(x-20, 155, 40, 3);
	musicNote(x, 155, colorC);
}

function noteD(x){
	musicNote(x, 145, colorD);
}

function noteE(x){
	musicNote(x, 130, colorE);
}

function noteF(x){
	musicNote(x, 120, colorF);
}

function noteG(x){
	musicNote(x, 105, colorG);
}

function noteA(x){
	musicNote(x, 95, colorA);
}

function noteB(x){
	musicNote(x, 80, colorB);
}
