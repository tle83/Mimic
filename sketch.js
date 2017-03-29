/**
Tuyet-Ngoc Le
	CSC 2463
	Final Project
**/

var c,d,e,f,g,a,b;
var musicArray;
var seq;

var isPlaying;

function preload(){

}

function setup(){
	createCanvas(720, 480);
	background(255);
	musicArray = new Array();
	isPlaying = false;

	seq = new Tone.Sequence(synthNotes, musicArray);

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
	//musicNote(60, 80);
	musicLine(230);
	
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
		seq.start("0");
	}
}

//GRAPHIC
function keyPressed(){
	console.log(keyCode);
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
	append(musicArray, keyCode);
	print(musicArray);
}

function musicNote(x,y){
	fill(0);
	ellipse(x,y,15*2, 25);
	rect(x+8, y-58, 7, 30*2);
	//rect(x+5, y-35, 20, 8);
}

function musicLine(y){
	fill(0);
	noStroke();
	rect(50, y-100, 600, 3);
	rect(50, y-125, 600, 3);
	rect(50, y-150, 600, 3);
	rect(50, y-175, 600, 3);
	rect(50, y-200, 600, 3);
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