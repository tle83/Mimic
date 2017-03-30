/**
Tuyet-Ngoc Le
	CSC 2463
	Final Project
**/

var c,d,e,f,g,a,b;
var musicArray;
var seq;
var synth;

var isPlaying = false;
var isRecording = false;
var stop = true;

var buttonColorPlay;
var buttonColorRec;
var buttonColorStop;
var colorC, colorD, colorE, colorF, colorG, colorA, colorB;

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
	musicArray = new Array();

	synth = new Tone.PolySynth(4, Tone.MonoSynth).toMaster();
	seq = new Tone.Sequence(synthNotes, musicArray, '8n');

}

function draw(){
	musicLine(40, 230);
	noteC(70*2);
	noteD(70*3);
	noteE(70*4);
	noteF(70*5);
	noteG(70*6);
	noteA(70*7);
	noteB(70*8);

	if(isPlaying == true){
		seq.start("0").stop("8m");
	}

	playButton();
	recordButton();
	stopButton();
}

//GRAPHIC
function keyPressed(){
	console.log(key);
	if(keyCode == 67){
		colorC = color(161, 88, 220);
		colorD = color(0);
		colorE = color(0);
		colorF = color(0);
		colorG = color(0);
		colorA = color(0);
		colorB = color(0);

	}
	else if(keyCode == 68){
		colorC = color(0);
		colorD = color(161, 88, 220);
		colorE = color(0);
		colorF = color(0);
		colorG = color(0);
		colorA = color(0);
		colorB = color(0);

	}
	else if(keyCode == 69){
		colorC = color(0);
		colorD = color(0);
		colorE = color(161, 88, 220);
		colorF = color(0);
		colorG = color(0);
		colorA = color(0);
		colorB = color(0);
	}
	else if(keyCode == 70){
		colorC = color(0);
		colorD = color(0);
		colorE = color(0);
		colorF = color(161, 88, 220);
		colorG = color(0);
		colorA = color(0);
		colorB = color(0);
	}
	else if(keyCode == 71){
		colorC = color(0);
		colorD = color(0);
		colorE = color(0);
		colorF = color(0);
		colorG = color(161, 88, 220);
		colorA = color(0);
		colorB = color(0);
	}
	else if(keyCode == 65){
		colorC = color(0);
		colorD = color(0);
		colorE = color(0);
		colorF = color(0);
		colorG = color(0);
		colorA = color(161, 88, 220);
		colorB = color(0);
	}
	else if(keyCode == 66){
		colorC = color(0);
		colorD = color(0);
		colorE = color(0);
		colorF = color(0);
		colorG = color(0);
		colorA = color(0);
		colorB = color(161, 88, 220);
	}
	if(isRecording == true && stop == false){
		append(musicArray, key + "4");
	}
	print(musicArray);
}

function mousePressed(){
	//rect(width / 20, 400, 50, 50, 10);
	if((mouseX > width / 20) && (mouseX < (width / 20) + 50) &&
		(mouseY > 400) && (mouseY < 400 + 50)){
			isPlaying = true;
			print("Playing");
			buttonColorPlay = color(100);
			buttonColorRec = color(255);
			buttonColorStop = color(255);

			for(var i = 0; i < musicArray.length; i++){
				print(musicArray[i]);
			}
		}
	if((mouseX > width / 7) && (mouseX < (width / 7) + 50) &&
		(mouseY > 400) && (mouseY < 400 + 50)){
			isRecording = true;
			stop = false;
			print("Recording");
			buttonColorRec = color(100);
			buttonColorPlay = color(255);
			buttonColorStop = color(255);
		}
	if((mouseX > width / 4.6) && (mouseX < (width / 4.6) + 50) &&
		(mouseY > 400) && (mouseY < 400 + 50)){
			stop = true;
			print("Stopped");
			buttonColorStop = color(100);
			buttonColorPlay = color(255);
			buttonColorRec = color(255);
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

//AUDIO
function synthNotes(time, note){
	synth.triggerAttackRelease(note, '8n', time);
}

function triggerSynth(time){
	synth.triggerAttackRelease('C2', '8n', time);
}