/**
Tuyet-Ngoc Le
	CSC 2463
	Final Project
**/

//AUDIO
var c,d,e,f,g,a,b;
var seq;
var synth;
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
	createCanvas(1280, 720);
	background(68, 203, 208);

	//AUDIO
	playerAnswer = [];

	synth = new Tone.PolySynth(4, Tone.MonoSynth).toMaster();
	singleSynth = new Tone.Synth().toMaster();
	singleSynth2 = new Tone.Synth().toMaster();

	Tone.Transport.loop = true;
	Tone.Transport.loopEnd = '5m';
	Tone.Transport.bpm = 100;
	Tone.Transport.schedule(triggerSynth, 0);

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
	seq = new Tone.Sequence(synthNotes, songPlaying, '8n');
	seq.start(0).stop('1m');

	if(cNote == false){
		noteC(200, 70, 0);
	}
	if(cNote == true){
		noteC(200, 70, 96);
	}
	if(dNote == false){
		noteD(320, 242, 0);
	}
	if(dNote == true){
		noteD(320, 242, 96);
	}
	if(eNote == false){
		noteE(480, 70, 0);
	}
	if(eNote == true){
		noteE(480, 70, 96);
	}
	if(fNote == false){
		noteF(640, 242, 0);
	}
	if(fNote == true){
		noteF(640, 242, 96);
	}
	if(gNote == false){
		noteG(800, 70, 0);
	}
	if(gNote == true){
		noteG(800, 70, 96);
	}
	if(aNote == false){
		noteA(960, 242, 0);
	}
	if(aNote == true){
		noteA(960, 242, 96);
	}
	if(bNote == false){
		noteB(1080, 70, 0);
	}
	if(bNote == true){
		noteB(1080, 70, 96);
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

//HARDWARE
function serialEvent(){
	inByte = int(serial.read());
	if(inByte == 5){
		//singleSynth.triggerAttackRelease("C4", "8n");
		if(isRecording){
			append(playerAnswer, "C4");
			console.log(playerAnswer);
		}
	}
	if(inByte == 6){
		singleSynth.triggerAttackRelease("D4", "8n");
		if(isRecording){
			append(playerAnswer, "D4");
			console.log(playerAnswer);
		}
	}
	if(inByte == 7){
		singleSynth.triggerAttackRelease("E4", "8n");
		if(isRecording){
			append(playerAnswer, "E4");
			console.log(playerAnswer);
		}
	}
	if(inByte == 8){
		singleSynth.triggerAttackRelease("F4", "8n");
		if(isRecording){
			append(playerAnswer, "F4");
			console.log(playerAnswer);
		}
	}
	if(inByte == 9){
		singleSynth.triggerAttackRelease("G4", "8n");
		if(isRecording){
			append(playerAnswer, "G4");
			console.log(playerAnswer);
		}
	}
	if(inByte == 10){
		singleSynth.triggerAttackRelease("A4", "8n");
		if(isRecording){
			append(playerAnswer, "A4");
			console.log(playerAnswer);
		}
	}
	if(inByte == 11){
		singleSynth.triggerAttackRelease("B4", "8n");
		if(isRecording){
			append(playerAnswer, "B4");
			console.log(playerAnswer);
		}
	}
}

function serialError(err) {
  print('Something went wrong with the serial port. ' + err);
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
	if(keyCode == 50){
		console.log(inByte);
	}
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
		append(playerAnswer, key.toLowerCase() + "4");
		console.log(playerAnswer);
	}
}

function mousePressed(){
	if((mouseX > 20) && (mouseX < 116) &&
		(mouseY > 570) && (mouseY < 666)){
			playButtonON = true;
			recButtonON = false;
			checkButtonOn = false;

			serial.write(20);

			isPlaying = true;
			print("Playing");

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

			//Tone.Transport.start();
			console.log("Notes being played: " + songPlaying);
	}
	if((mouseX > 126) && (mouseX < 222) &&
		(mouseY > 570) && (mouseY < 666)){
			playButtonON = false;
			recButtonON = true;
			checkButtonOn = false;

			isRecording = true;
			stop = false;
			
			//Tone.Transport.stop();
			playerAnswer = [];
			print("Recording");

			console.log("Song Playing: " + songPlaying);
			console.log("Song Count: " + songCount);
		}
	if((mouseX > 232) && (mouseX < 328) &&
		(mouseY > 570) && (mouseY < 666)){
			playButtonON = false;
			recButtonON = false;
			checkButtonOn = true;

			stop = true;
			print("Checking");
			//Tone.Transport.stop();
			console.log("Song Count: " + songCount);

			seq.mute = true;
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
	if(playButtonON){
		image(buttons, 20, 570,  96, 96, 96, 0, 96, 96);
	}
	else{
		image(buttons, 20, 570,  96, 96, 0, 0, 96, 96);
	}
}

function recordButton(){
	if(recButtonON){
		image(buttons, 126, 570, 96, 96, 96, 96, 96, 96);
	}
	else{
		image(buttons, 126, 570, 96, 96, 0, 96, 96, 96);
	}
}

function stopButton(){
	if(checkButtonOn){
		image(buttons, 232, 570, 96, 96, 96, 192, 96, 96);
	}
	else{
		image(buttons, 232, 570, 96, 96, 0, 192, 96, 96);
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
}

function noteD(x,y,xTile){
	image(music, x, y, 96, 96, xTile, 0, 96, 96);
}

function noteE(x,y,xTile){
	image(music, x, y, 96, 96, xTile, 0, 96, 96);
}

function noteF(x,y,xTile){
	image(music, x, y, 96, 96, xTile, 0, 96, 96);
}

function noteG(x,y,xTile){
	image(music, x, y, 96, 96, xTile, 0, 96, 96);
}

function noteA(x,y,xTile){
	image(music, x, y, 96, 96, xTile, 0, 96, 96);
}

function noteB(x,y,xTile){
	image(music, x, y, 96, 96, xTile, 0, 96, 96);
}
