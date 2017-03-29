/**
Tuyet-Ngoc Le
	CSC 2463
	Final Project
**/

var c,d,e,f,g,a,b;
var musicArray;
var seq;
var synth;

var isPlaying;
var isRecording;
var stop;

function preload(){

}

function setup(){
	createCanvas(720, 480);
	background(255);
	musicArray = new Array();
	isPlaying = false;
	isRecording = false;
	stop = true;

	synth = new Tone.PolySynth(4, Tone.MonoSynth).toMaster();
	seq = new Tone.Sequence(synthNotes, musicArray, '8n');

	//7 notes
	c = false;
	d = false;
	e = false;
	f = false;
	g = false;
	a = false;
	b = false;
}

function draw(){
	musicLine(40, 230);

	if(c){
		noteC(70*2);
	}
	if(d){
		noteD(70*3);
	}
	if(e){
		noteE(70*4);
	}
	if(f){
		noteF(70*5);
	}
	if(g){
		noteG(70*6);
	}
	if(a){
		noteA(70*7);
	}
	if(b){
		noteB(70*8);
	}
	if(isPlaying){
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
		c = true;
	}
	if(keyCode == 68){
		d = true;
	}
	if(keyCode == 69){
		e = true;
	}
	if(keyCode == 70){
		f = true;
	}
	if(keyCode == 71){
		g = true;
	}
	if(keyCode == 65){
		a = true;
	}
	if(keyCode == 66){
		b = true;
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
		}
	if((mouseX > width / 7) && (mouseX < (width / 7) + 50) &&
		(mouseY > 400) && (mouseY < 400 + 50)){
			isRecording = true;
			stop = false;
			print("Recording");
		}
	if((mouseX > width / 4.6) && (mouseX < (width / 4.6) + 50) &&
		(mouseY > 400) && (mouseY < 400 + 50)){
			stop = true;
			print("Stopped");
		}
}

function playButton(){
	fill(255);
	stroke(0);
	strokeWeight(2);
	rect(width / 20, 400, 50, 50, 10);

	fill(137, 253, 109);
	triangle(width / 13, 410, width / 13, 440, width / 10, 425);
}

function recordButton(){
	fill(255);
	stroke(0);
	strokeWeight(2);
	rect(width / 7.5, 400, 50, 50, 10);

	fill(250, 16, 76);
	ellipse(width / 6, 425, 30, 30);
}

function stopButton(){
	fill(255);
	stroke(0);
	strokeWeight(2);
	rect(width / 4.6, 400, 50, 50, 10);

	fill(250, 16, 76);
	rect(width / 4.25, 413, 25, 25);
}

function musicNote(x,y){
	fill(0);
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
	musicNote(x, 155);
}

function noteD(x){
	musicNote(x, 145);
}

function noteE(x){
	musicNote(x, 130);
}

function noteF(x){
	musicNote(x, 120);
}

function noteG(x){
	musicNote(x, 105);
}

function noteA(x){
	musicNote(x, 95);
}

function noteB(x){
	musicNote(x, 80);
}

//AUDIO
function synthNotes(time, note){
	synth.triggerAttackRelease(note, '8n', time);
}

function triggerSynth(time){
	synth.triggerAttackRelease('C2', '8n', time);
}