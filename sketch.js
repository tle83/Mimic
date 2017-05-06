/**
Tuyet-Ngoc Le
	CSC 2463
	Final Project
**/

//AUDIO
var c,d,e,f,g,a,b;
var singleSynth, singleSynth2;

var isPlaying = false;
var isRecording = false;
var stop = true;

var cNote = false;
var dNote = false;
var eNote = false; 
var fNote = false; 
var gNote = false; 
var aNote = false; 
var bNote = false; 

var songs = [];
var song1, song2, song3, song4, song5;
var playerAnswer;
var songPlaying;
var songCount = 0;
var playerCorrect = false;

//GRAPHIC
var buttons;
var music;
var playButtonON = false;
var recButtonON = false;
var checkButtonOn = false;

//HARDWARE
var serial;
var portName = "/dev/cu.usbmodem1411";
var outByte = 0;
var inByte;


function preload(){
	buttons = loadImage("Images/Buttons.png");
	music = loadImage("Images/music.png");
}


function setup(){
	//GRAPHIC
	createCanvas(1024, 600);
	background(58,87,117);
	image(music, 440, 250, 96, 96, 192, 192, 96, 96);

	//AUDIO
	playerAnswer = [];

	singleSynth = new Tone.Synth().toMaster();
	singleSynth2 = new Tone.Synth().toMaster();

	song1 = ['d4', 'e4', 'd4', 'a4', 'g4', 'b4', 'c4', 'g4'];
	song2 = ['a4', 'g4', 'a4', 'b4', 'd4', 'd4', 'b4', 'g4'];
	song3 = ['a4', 'g4', 'e4', 'a4', 'c4', 'd4', 'd4', 'b4'];
	song4 = ['a4', 'c4', 'f4', 'g4', 'd4', 'a4', 'b4', 'a4'];
	song5 = ['c4', 'd4', 'f4', 'c4', 'e4', 'g4', 'b4', 'e4'];
	songs = [song1, song2, song3, song4, song5];

	//HARDWARE
	serial = new p5.SerialPort();
	serial.on('data', serialEvent);
	serial.on('error', serialError);
	serial.open(portName);
}

function draw(){
	songPlaying = songs[songCount];

	if(cNote == false){
		noteC(320-200, 350, 0);
	}
	if(cNote == true){
		noteC(320-200, 350, 96);
	}
	if(dNote == false){
		noteD(320-200, 170, 0);
	}
	if(dNote == true){
		noteD(320-200, 170, 96);
	}
	if(eNote == false){
		noteE(480-200, 90, 0);
	}
	if(eNote == true){
		noteE(480-200, 90, 96);
	}
	if(fNote == false){
		noteF(640-200, 20, 0);
	}
	if(fNote == true){
		noteF(640-200, 20, 96);
	}
	if(gNote == false){
		noteG(800-200, 90, 0);
	}
	if(gNote == true){
		noteG(800-200, 90, 96);
	}
	if(aNote == false){
		noteA(960-200, 170, 0);
	}
	if(aNote == true){
		noteA(960-200, 170, 96);
	}
	if(bNote == false){
		noteB(960-200, 350, 0);
	}
	if(bNote == true){
		noteB(960-200, 350, 96);
	}

	playButton();
	recordButton();
	stopButton();

	image(music, 345 ,400, 288, 64, 0, 350, 288, 64);
    
	textSize(18);
    fill(255);
    text(playerAnswer + " ", 390, 440);
}

//HARDWARE
function serialEvent(){
	inByte = int(serial.read());
	if(inByte == 5){
		singleSynth.triggerAttackRelease("C4", "8n");
		if(isRecording){
			if(playerAnswer.length < songPlaying.length){
				append(playerAnswer, "c4");
			}
		}
		cNote = true;
		dNote = false;
		eNote = false; 
		fNote = false; 
		gNote = false; 
		aNote = false; 
		bNote = false; 
	}
	if(inByte == 6){
		singleSynth.triggerAttackRelease("D4", "8n");
		if(isRecording){
			if(playerAnswer.length < songPlaying.length){
				append(playerAnswer, "d4");
			}
		}
		cNote = false;
		dNote = true;
		eNote = false; 
		fNote = false; 
		gNote = false; 
		aNote = false; 
		bNote = false; 
	}
	if(inByte == 7){
		singleSynth.triggerAttackRelease("E4", "8n");
		if(isRecording){
			if(playerAnswer.length < songPlaying.length){
				append(playerAnswer, "e4");
			}
		}
		cNote = false;
		dNote = false;
		eNote = true; 
		fNote = false; 
		gNote = false; 
		aNote = false; 
		bNote = false; 
	}
	if(inByte == 8){
		singleSynth.triggerAttackRelease("F4", "8n");
		if(isRecording){
			if(playerAnswer.length < songPlaying.length){
				append(playerAnswer, "f4");
			}
		}
		cNote = false;
		dNote = false;
		eNote = false; 
		fNote = true; 
		gNote = false; 
		aNote = false; 
		bNote = false; 
	}
	if(inByte == 9){
		singleSynth.triggerAttackRelease("G4", "8n");
		if(isRecording){
			if(playerAnswer.length < songPlaying.length){
				append(playerAnswer, "g4");
			}
		}
		
		cNote = false;
		dNote = false;
		eNote = false; 
		fNote = false; 
		gNote = true; 
		aNote = false; 
		bNote = false; 
	}
	if(inByte == 10){
		singleSynth.triggerAttackRelease("A4", "8n");
		if(isRecording){
			if(playerAnswer.length < songPlaying.length){
				append(playerAnswer, "a4");
			}
		}
		cNote = false;
		dNote = false;
		eNote = false; 
		fNote = false; 
		gNote = false; 
		aNote = true; 
		bNote = false; 
	}
	if(inByte == 11){
		singleSynth.triggerAttackRelease("B4", "8n");
		if(isRecording){
			if(playerAnswer.length < songPlaying.length){
				append(playerAnswer, "b4");
			}
		}
		cNote = false;
		dNote = false;
		eNote = false; 
		fNote = false; 
		gNote = false; 
		aNote = false; 
		bNote = true; 
	}
	console.log(playerAnswer);
}

function serialError(err) {
  print('Something went wrong with the serial port. ' + err);
}

//GRAPHIC
function keyPressed(){
	if(keyCode == 67){
		singleSynth.triggerAttackRelease("C4", "8n");
		cNote = true;
		dNote = false;
		eNote = false; 
		fNote = false; 
		gNote = false; 
		aNote = false; 
		bNote = false; 
	}
	else if(keyCode == 68){
		singleSynth.triggerAttackRelease("D4", "8n");
		cNote = false;
		dNote = true;
		eNote = false; 
		fNote = false; 
		gNote = false; 
		aNote = false; 
		bNote = false; 

	}
	else if(keyCode == 69){
		singleSynth.triggerAttackRelease("E4", "8n");
		cNote = false;
		dNote = false;
		eNote = true; 
		fNote = false; 
		gNote = false; 
		aNote = false; 
		bNote = false; 
	}
	else if(keyCode == 70){
		singleSynth.triggerAttackRelease("F4", "8n");
		cNote = false;
		dNote = false;
		eNote = false; 
		fNote = true; 
		gNote = false; 
		aNote = false; 
		bNote = false; 
	}
	else if(keyCode == 71){
		singleSynth.triggerAttackRelease("G4", "8n");
		cNote = false;
		dNote = false;
		eNote = false; 
		fNote = false; 
		gNote = true; 
		aNote = false; 
		bNote = false; 
	}
	else if(keyCode == 65){
		singleSynth.triggerAttackRelease("A4", "8n");
		cNote = false;
		dNote = false;
		eNote = false; 
		fNote = false; 
		gNote = false; 
		aNote = true; 
		bNote = false; 
	}
	else if(keyCode == 66){
		singleSynth.triggerAttackRelease("B4", "8n");
		cNote = false;
		dNote = false;
		eNote = false; 
		fNote = false; 
		gNote = false; 
		aNote = false; 
		bNote = true; 
	}
	if(isRecording == true && stop == false){
		for(var j = 0; j <= songPlaying.length; j++){
			append(playerAnswer, key.toLowerCase() + "4");
		}
		console.log(playerAnswer);
		if(playerAnswer.length > 7){
			stop = true;
		}
	}
}

function mousePressed(){
	if((mouseX > 334) && (mouseX < 430) &&
		(mouseY > 470) && (mouseY < 566)){
			playButtonON = true;
			recButtonON = false;
			checkButtonOn = false;

			serial.write(byte(20));

			//checking icon
            image(music, 440, 250, 96, 96, 192, 192, 96, 96)

            isPlaying = true;
            stop = false;
			if(isPlaying){
				if(songCount == 0){
					singleSynth2.triggerAttackRelease('d4', '8n', '+0.5');
					singleSynth2.triggerAttackRelease('e4', '8n', '+1.0');
					singleSynth2.triggerAttackRelease('d4', '8n', '+1.5');
					singleSynth2.triggerAttackRelease('a4', '8n', '+2.0');
					singleSynth2.triggerAttackRelease('g4', '8n', '+2.5');
					singleSynth2.triggerAttackRelease('b4', '8n', '+3.0');
					singleSynth2.triggerAttackRelease('c4', '8n', '+3.5');
                    singleSynth2.triggerAttackRelease('g4', '8n', '+4.0');
				}
				if(songCount == 1){
					singleSynth2.triggerAttackRelease('a4', '8n', '+0.5');
					singleSynth2.triggerAttackRelease('g4', '8n', '+1.0');
					singleSynth2.triggerAttackRelease('a4', '8n', '+1.5');
					singleSynth2.triggerAttackRelease('b4', '8n', '+2.0');
					singleSynth2.triggerAttackRelease('d4', '8n', '+2.5');
					singleSynth2.triggerAttackRelease('d4', '8n', '+3.0');
					singleSynth2.triggerAttackRelease('b4', '8n', '+3.5');
					singleSynth2.triggerAttackRelease('g4', '8n', '+4.0');
				}
				if(songCount == 2){
					singleSynth2.triggerAttackRelease('a4', '8n', '+0.5');
					singleSynth2.triggerAttackRelease('g4', '8n', '+1.0');
					singleSynth2.triggerAttackRelease('e4', '8n', '+1.5');
					singleSynth2.triggerAttackRelease('a4', '8n', '+2.0');
					singleSynth2.triggerAttackRelease('c4', '8n', '+2.5');
					singleSynth2.triggerAttackRelease('d4', '8n', '+3.0');
					singleSynth2.triggerAttackRelease('d4', '8n', '+3.5');
					singleSynth2.triggerAttackRelease('b4', '8n', '+4.0');
				}
				if(songCount == 3){
					singleSynth2.triggerAttackRelease('a4', '8n', '+0.5');
					singleSynth2.triggerAttackRelease('c4', '8n', '+1.0');
					singleSynth2.triggerAttackRelease('f4', '8n', '+1.5');
					singleSynth2.triggerAttackRelease('g4', '8n', '+2.0');
					singleSynth2.triggerAttackRelease('d4', '8n', '+2.5');
					singleSynth2.triggerAttackRelease('a4', '8n', '+3.0');
					singleSynth2.triggerAttackRelease('b4', '8n', '+3.5');
					singleSynth2.triggerAttackRelease('a4', '8n', '+4.0');
				}
				if(songCount == 4){
					singleSynth2.triggerAttackRelease('c4', '8n', '+0.5');
					singleSynth2.triggerAttackRelease('d4', '8n', '+1.0');
					singleSynth2.triggerAttackRelease('f4', '8n', '+1.5');
					singleSynth2.triggerAttackRelease('c4', '8n', '+2.0');
					singleSynth2.triggerAttackRelease('e4', '8n', '+2.5');
					singleSynth2.triggerAttackRelease('g4', '8n', '+3.0');
					singleSynth2.triggerAttackRelease('b4', '8n', '+3.5');
					singleSynth2.triggerAttackRelease('e4', '8n', '+4.0');
				}
			}
			console.log("Notes being played: " + songPlaying);
	}
	if((mouseX > 440) && (mouseX < 536) &&
		(mouseY > 470) && (mouseY < 566)){
			playButtonON = false;
			recButtonON = true;
			checkButtonOn = false;

			isRecording = true;
			stop = false;

            serial.write(byte(30));
            image(music, 440, 250, 96, 96, 288, 192, 96, 96);
			
			playerAnswer = [];

			console.log("Song Playing: " + songPlaying);
			console.log("Song Count: " + songCount);
		}
	if((mouseX > 546) && (mouseX < 642) &&
		(mouseY > 470) && (mouseY < 566)){
			playButtonON = false;
			recButtonON = false;
			checkButtonOn = true;

			cNote = false;
			dNote = false;
			eNote = false; 
			fNote = false; 
			gNote = false; 
			aNote = false; 
			bNote = false;

			stop = true;
			
			serial.write(byte(40));
			console.log("Song Count: " + songCount);

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
					image(music, 440, 250, 96, 96, 192, 0, 96, 96);
				}
				if(correctCount != songPlaying.length){
					console.log("WRONG");
					playerCorrect = false;
					image(music, 440, 250, 96, 96, 192, 96, 96, 96);
				}
				if(playerCorrect){
					songCount++;
				}
			}
		}
}

function playButton(){
	if(playButtonON){
		image(buttons, 334, 470, 96, 96, 96, 0, 96, 96);
	}
	else{
		image(buttons, 334, 470, 96, 96, 0, 0, 96, 96);
	}
}

function recordButton(){
	if(recButtonON){
		image(buttons, 440, 470, 96, 96, 96, 96, 96, 96);
	}
	else{
		image(buttons, 440, 470, 96, 96, 0, 96, 96, 96);
	}
}

function stopButton(){
	if(checkButtonOn){
		image(buttons, 546, 470, 96, 96, 96, 192, 96, 96);
	}
	else{
		image(buttons, 546, 470, 96, 96, 0, 192, 96, 96);
	}
}

function musicNote(x,y, c){
	fill(c);
	ellipse(x,y,15*2, 25);
	rect(x+8, y-58, 7, 30*2);
	//rect(x+5, y-35, 20, 8);
}


function noteC(x,y,xTile){
	image(music, x, y, 96, 96, xTile, 0, 96, 96);
	image(music, x, y + 95, 96, 64, 0, 96, 96, 64);
}

function noteD(x,y,xTile){
	image(music, x, y, 96, 96, xTile, 0, 96, 96);
	image(music, x, y + 95, 96, 64, 96, 96, 96, 64);
}

function noteE(x,y,xTile){
	image(music, x, y, 96, 96, xTile, 0, 96, 96);
	image(music, x, y + 95, 96, 64, 0, 160, 96, 64);
}

function noteF(x,y,xTile){
	image(music, x, y, 96, 96, xTile, 0, 96, 96);
	image(music, x, y + 95, 96, 64, 96, 160, 96, 64);
}

function noteG(x,y,xTile){
	image(music, x, y, 96, 96, xTile, 0, 96, 96);
	image(music, x, y + 95, 96, 64, 0, 224, 96, 64);
}

function noteA(x,y,xTile){
	image(music, x, y, 96, 96, xTile, 0, 96, 96);
	image(music, x, y + 95, 96, 64, 96, 224, 96, 64);
}

function noteB(x,y,xTile){
	image(music, x, y, 96, 96, xTile, 0, 96, 96);
	image(music, x, y + 95, 96, 64, 0, 288, 96, 64);
}
