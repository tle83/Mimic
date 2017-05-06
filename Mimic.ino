const int buttonC = 2;
const int buttonD = 3;
const int buttonE = 4;
const int buttonF = 5;
const int buttonG = 6;
const int buttonA = 7;
const int buttonB = 8;

const int ledR = 10;
const int ledB = 11;
const int ledY = 12;

int buttonPressedC = 0;
int buttonPressedD = 0;
int buttonPressedE = 0;
int buttonPressedF = 0;
int buttonPressedG = 0;
int buttonPressedA = 0;
int buttonPressedB = 0;

int inData;
 
void setup() 
{
  Serial.begin(9600);
  
  pinMode(ledR, OUTPUT);
  pinMode(ledB, OUTPUT);
  pinMode(ledY, OUTPUT);
  
  pinMode(buttonC, INPUT);
  pinMode(buttonD, INPUT);
  pinMode(buttonE, INPUT);
  pinMode(buttonF, INPUT);
  pinMode(buttonG, INPUT);
  pinMode(buttonA, INPUT);
  pinMode(buttonB, INPUT);
}

void loop() {
  buttonPressedC = digitalRead(buttonC);
  buttonPressedD = digitalRead(buttonD);
  buttonPressedE = digitalRead(buttonE);
  buttonPressedF = digitalRead(buttonF);
  buttonPressedG = digitalRead(buttonG);
  buttonPressedA = digitalRead(buttonA);
  buttonPressedB = digitalRead(buttonB);
  
  if(buttonPressedC == HIGH){
    analogWrite(ledY, 255);
    delay(300);
    analogWrite(ledY, 0);

    Serial.write(5);
  }
  if(buttonPressedD == HIGH){
    analogWrite(ledY, 255);
    delay(300);
    analogWrite(ledY, 0);

    Serial.write(6);
  }
  if(buttonPressedE == HIGH){
    analogWrite(ledY, 255);
    delay(300);
    analogWrite(ledY, 0);

    Serial.write(7);
  }
  if(buttonPressedF == HIGH){
    analogWrite(ledY, 255);
    delay(300);
    analogWrite(ledY, 0);

    Serial.write(8);
  }
  if(buttonPressedG == HIGH){
    analogWrite(ledY, 255);
    delay(300);
    analogWrite(ledY, 0);

    Serial.write(9);
  }
  if(buttonPressedA == HIGH){
    analogWrite(ledY, 255);
    delay(300);
    analogWrite(ledY, 0);

    Serial.write(10);
  }
  if(buttonPressedB == HIGH){
    analogWrite(ledY, 255);
    delay(300);
    analogWrite(ledY, 0);

    Serial.write(11);
  }
  if(Serial.available() > 0){
    inData = Serial.read();
    if(inData == 20){
      analogWrite(ledB, 125);
      analogWrite(ledR, 0);
      analogWrite(ledY, 0);
    }
     if(inData == 30){
      analogWrite(ledR, 125);
      analogWrite(ledB, 0);
      analogWrite(ledY, 0);
    }
    if(inData == 40){
      analogWrite(ledB, 0);
      analogWrite(ledR, 0);
      analogWrite(ledY, 125);
    }
  }
}
