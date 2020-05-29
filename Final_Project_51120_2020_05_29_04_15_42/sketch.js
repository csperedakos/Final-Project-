let song
var button 
var shoecolor
var button2
var headcolor
var neckcolor
var eyecolor 
var armcolor
var handcolor
let bubbles = []; 

function preload(){
  song= loadSound('SONG.mp3')
} 
function setup() {
      song.play();
  createCanvas(700,400);
  background(28,28,28);
  shoecolor= color(random(0,255),random(0,255),random(0,255))
  button = createButton("change shoe color");
	button.mousePressed(shoeColor);
    headcolor= color(random(0,255),random(0,255),random(0,255)) 
  button2 = createButton("change head color");
	button2.mousePressed(headColor);
  neckcolor= color(random(0,255),random(0,255),random(0,255))
  button = createButton ("change neck color")
  button.mousePressed(neckColor) 
  eyecolor = color(random(0,255),random(0,255),random(0,255))
  button = createButton ("change eye color") 
  button.mousePressed(eyeColor); 
  armcolor = color(random(0,255),random(0,255),random(0,255))
  button = createButton ("change arm color") 
  button.mousePressed(armColor);
  handcolor= 
color(random(0,255),random(0,255),random(0,255))
  button = createButton("change hand color");
	button.mousePressed(handColor);
 legcolor= 
color(random(0,255),random(0,255),random(0,255))
  button = createButton("change leg color");
	button.mousePressed(legColor);
}

function mousePressed() {
  let r = random (10,50) 
  let b = new Bubble (mouseX,mouseY,r)
  bubbles.push(b) 
  } 

function draw() { 
  background(28,28,28);

  for (let i = 0; i < bubbles.length; i++){
    bubbles[i].show()
  }
  let outereyecolor = color(214,211,245);
  let innereyecolor= eyecolor; 
  
  let insideofbot= color(108, 111, 109);
  //assign insideofbot to color
  
  fill(insideofbot);
  fill(neckcolor) 
  rect(170,160,60,10);
  //neck 
  
  
  
  fill(legcolor);
  rect(180,220,10,20);
  //left leg 
  rect(210,220,10,20);
  //right leg
  fill(shoecolor)
  arc(180,240,25,25,PI,0,CHORD); 
  //left foot
  arc(220,240,25,25,PI,0,CHORD);
  //right foot 
    fill(armcolor);
  rect(114,192,8,17)
  //first block after elbow left 
  rect(279,170,8,17)
  //first block after elbow right 
  ellipse(120,189,16,12)
  //left elbow 
  ellipse(280,189,16,12)
  //right elbow 
  rect(124,183,18,13)
  //second block left arm 
  rect(258,183,18,13)
  //second block right arm 
  rect(134,181,18,18)
  //first block of left arm 
  rect(248,181,18,18)
  //first block of right arm
  arc(160,190,25,25,HALF_PI,300,CHORD);
  //left arm socket 
  arc(240,190,25,25,-HALF_PI,20.45,CHORD);
  //right arm socket 
  line(106,221,110,221)
  //left hand left connector line
  line(130,221,126,221)
  //left hand right connector line 
  line(271,158,275,158)
  //right hand left connector line 
  line(291,158,295,158)
  //right hand right connector line 
fill(handcolor) 

  arc(118,221,25,25,PI,0); 
  //outside left hand 
  arc(283,158,25,25,0,PI); 
  //outside right hand 
  let blendhands = color(28,28,28);
  //assign blendhands to color 220 (offwhite/backround color) 
  fill(blendhands) 
  //make inner left and right hands blend in with backdrop) 
  arc(118,221,15,15,PI,0); 
  //inside left hand
  arc(283,158,15,15,0,PI); 
  //inside right hand 
   fill(insideofbot)
  //make sure the rest of the robot also doesnt match backdrop because of the hand blend command 
  rect(160, 170, 80, 50, 5);
  //body 
  rect(170, 180, 60, 30, 5);
  //inner body 
  
  
  let greenbutton = color(55, 212, 62);
  let yellowbutton = color(251, 224, 75);
  let redbutton = color(255, 50, 50);
  fill(greenbutton) 
  //makes green button green 
  ellipse(165,186,5,5);
  //green button
  fill(yellowbutton)
  //makes yellow button yellow 
  ellipse(165,196,5,5);
  //yellow button 
  fill(redbutton)
  //makes red button red 
  ellipse(165,206,5,5);
  //red button
  fill(insideofbot) 
  //makes sure entire but doesn't become red 

  
stroke(17, 231, 108) 
  //colors lifeline green 
  line(172,191,182,191)
  //top lifeline first segment 
  line(182,191,184,197);
  //top lifeline second segment 
  line(184,197,186,191,);
  //top lifeline third segment 
  line(186,191,194,191)
  //top lifeline fourth segment 
  line(194,191,199,203)
  //top lifeline fifth segment 
  line(199,203,205,185)
  //top lifeline sixth segment 
  line(205,185,208,191)
  //top lifeline seventh segment 
  line(208,191,228,191)
  //top lifeline eigth segment
  
  line(172,194,180,194)
  //top lifeline first segment 
  line(180,194,184,202);
  //top lifeline second segment 
  line(184,202,188,194,);
  //top lifeline third segment 
  line(188,194,192,194)
  //top lifeline fourth segment 
  line(192,194,199,208);
  //top lifeline fifth segment 
  line(199,210,205.4,190.8)
  //top lifeline sixth segment 
  line(205.4,190.8,207,194)
  //top lifeline seventh segment 
  line(207,194,228,194)
  //top lifeline eigth segment
  stroke(0,0,0)
  //makes sure the rest of the bot stays black, not green
  line(198,210,201,210) 
  //just to cover up the little green blip at the bottom of the heart rate point :) 
    fill(headcolor) 
  rect(145, 80, 110, 80, 10);
  //head 
  rect(197,48,5,20);
  //rectangle head piece 
  arc(200,80,25,25,PI,0,CHORD);
  //half circle head piece 
  ellipse(200, 49, 20, 5);
  //top part of head piece 
  
  fill(outereyecolor)
  ellipse(225,115,25,25);
  //right eye outer
  strokeWeight(3);
  //make inner eye darker
  ellipse(175,115,25,25);
  //left eye outer 
  fill(insideofbot) 
  strokeWeight (1) 
  //make rest of bot normal stroke weight


  fill(innereyecolor)
  ellipse(175,115,15,15);
  //left eye inner
  strokeWeight(3);
  //make inner eye darker
  ellipse(225,115,15,15);
  //right eye inner
  fill(insideofbot)
  strokeWeight(1);
  //make rest of bot normal stroke weight 
  
  fill(headcolor) 
  rect(160, 135, 80, 20, 5);
  //outer mouth
  fill(insideofbot)
  strokeWeight(6);
  //make inner mouth darker 
  arc(200,152,50,10,PI,0,CHORD);
  //inside mouth
  strokeWeight(1);
  //make rest of bot normal stroke weight
//---------------
  fill(insideofbot);
  fill(neckcolor) 
  rect(170+290,160,60,10);
  //neck 
  
  fill(legcolor);
  rect(180+290,220,10,20);
  //left leg 
  rect(210+290,220,10,20);
  //right leg
  fill(shoecolor)
  arc(180+290,240,25,25,PI,0,CHORD); 
  //left foot
  arc(220+290,240,25,25,PI,0,CHORD);
  //right foot 
    fill(armcolor);
  rect(114+290,192,8,17)
  //first block after elbow left 
  rect(279+290,170,8,17)
  //first block after elbow right 
  ellipse(120+290,189,16,12)
  //left elbow 
  ellipse(280+290,189,16,12)
  //right elbow 
  rect(124+290,183,18,13)
  //second block left arm 
  rect(258+290,183,18,13)
  //second block right arm 
  rect(134+290,181,18,18)
  //first block of left arm 
  rect(248+290,181,18,18)
  //first block of right arm
  arc(160+290,190,25,25,HALF_PI,300,CHORD);
  //left arm socket 
  arc(240+290,190,25,25,-HALF_PI,20.45,CHORD);
  //right arm socket 
  line(106+290,221,110+290,221)
  //left hand left connector line
  line(130+290,221,126+290,221)
  //left hand right connector line 
  line(271+290,158,275+290,158)
  //right hand left connector line 
  line(291+290,158,295+290,158)
  //right hand right connector line 
fill(handcolor) 

  arc(118+290,221,25,25,PI,0); 
  //outside left hand 
  arc(283+290,158,25,25,0,PI); 
  //outside right hand 
  //assign blendhands to color 220 (offwhite/backround color) 
  fill(blendhands) 
  //make inner left and right hands blend in with backdrop) 
  arc(118+290,221,15,15,PI,0); 
  //inside left hand
  arc(283+290,158,15,15,0,PI); 
  //inside right hand 
   fill(insideofbot)
  //make sure the rest of the robot also doesnt match backdrop because of the hand blend command 
  rect(160+290, 170, 80, 50, 5);
  //body 
  rect(170+290, 180, 60, 30, 5);
  //inner body 
  
  fill(greenbutton) 
  //makes green button green 
  ellipse(165+290,186,5,5);
  //green button
  fill(yellowbutton)
  //makes yellow button yellow 
  ellipse(165+290,196,5,5);
  //yellow button 
  fill(redbutton)
  //makes red button red 
  ellipse(165+290,206,5,5);
  //red button
  fill(insideofbot) 
  //makes sure entire but doesn't become red 

  
stroke(17, 231, 108) 
  //colors lifeline green 
  line(172+290,191,182+290,191)
  //top lifeline first segment 
  line(182+290,191,184+290,197);
  //top lifeline second segment 
  line(184+290,197,186+290,191,);
  //top lifeline third segment 
  line(186+290,191,194+290,191)
  //top lifeline fourth segment 
  line(194+290,191,199+290,203)
  //top lifeline fifth segment 
  line(199+290,203,205+290,185)
  //top lifeline sixth segment 
  line(205+290,185,208+290,191)
  //top lifeline seventh segment 
  line(208+290,191,228+290,191)
  //top lifeline eigth segment
  
  line(172+290,194,180+290,194)
  //top lifeline first segment 
  line(180+290,194,184+290,202);
  //top lifeline second segment 
  line(184+290,202,188+290,194,);
  //top lifeline third segment 
  line(188+290,194,192+290,194)
  //top lifeline fourth segment 
  line(192+290,194,199+290,208);
  //top lifeline fifth segment 
  line(199+290,210,205.4+290,190.8)
  //top lifeline sixth segment 
  line(205.4+290,190.8,207+290,194)
  //top lifeline seventh segment 
  line(207+290,194,228+290,194)
  //top lifeline eigth segment
  stroke(0,0,0)
  //makes sure the rest of the bot stays black, not green
  line(198+290,210,201+290,210) 
  //just to cover up the little green blip at the bottom of the heart rate point :) 
    fill(headcolor) 
  rect(145+290, 80, 110, 80, 10);
  //head 
  rect(197+290,48,5,20);
  //rectangle head piece 
  arc(200+290,80,25,25,PI,0,CHORD);
  //half circle head piece 
  ellipse(200+290, 49, 20, 5);
  //top part of head piece 
  
  fill(outereyecolor)
  ellipse(225+290,115,25,25);
  //right eye outer
  strokeWeight(3);
  //make inner eye darker
  ellipse(175+290,115,25,25);
  //left eye outer 
  fill(insideofbot) 
  strokeWeight (1) 
  //make rest of bot normal stroke weight


  fill(innereyecolor)
  ellipse(175+290,115,15,15);
  //left eye inner
  strokeWeight(3);
  //make inner eye darker
  ellipse(225+290,115,15,15);
  //right eye inner
  fill(insideofbot)
  strokeWeight(1);
  //make rest of bot normal stroke weight 
  
  fill(headcolor) 
  rect(160+290, 135, 80, 20, 5);
  //outer mouth
  fill(insideofbot)
  strokeWeight(6);
  //make inner mouth darker 
  arc(200+290,152,50,10,PI,0,CHORD);
  //inside mouth
  strokeWeight(1);
  //make rest of bot normal stroke weight
//-------------
    fill(insideofbot);
  fill(neckcolor) 
  rect(320+6,190,60/2,10/2);
  //neck 
  
  fill(legcolor);
  rect(180+144+6,221,10/2,30/2);
  //left leg 
  rect(210+130+6,221,10/2,30/2);
  //right leg
  fill(shoecolor)
  arc(180+144+6,240,25/2,25/2,PI,0,CHORD); 
  //left foot
  arc(220+125+6,240,25/2,25/2,PI,0,CHORD);
  //right foot 
    fill(armcolor);
  // weird left bot crap
  rect(114,192,8,17)
  //first block after elbow left (weird left bot) 
  rect(114+176.5+6,192+4,8/2.5,17/2)
  rect(279,170,8,17)
  //first block after elbow right (weird left bot) 
  rect(279+98+6,170+34,8/2.5,17/2)
  
  ellipse(120,189,16,12)
  //left elbow (weird left bot) 
  ellipse(120+174+6,189+15,16/2,12/2)
  ellipse(280,189,16,12)
  //right elbow (weird left bot) 
  ellipse(280+96+6,189+15,16/2,12/2)
  rect(124,183,18,13)
  //second block left arm (weird left bot)
  rect(258,183,18,13)
  //second block right arm (weird left bot) 
  rect(258+37+6,183+17.5,18/2,13/2)
  rect(258+108+6,183+17.5,18/2,13/2)
  rect(134,181,18,18)
  //first block of left arm (weird left bot) 
  rect(134+167+6,181+18,18/2,18/2)
  rect(248,181,18,18)
  //first block of right arm (weird left bot) 
  rect(248+112+6,181+18,18/2,18/2)

  arc(160,190,25,25,HALF_PI,300,CHORD);
  //left arm socket LEFT BOT O.o  
  arc(160+155+6,190+14,25/2,25/2,HALF_PI,300,CHORD);
 arc(240,190,25,25,-HALF_PI,20.45,CHORD);
//right arm socket LEFT BOT O.o
  arc(240+115+6,190+14,25/2,25/2,-HALF_PI,20.45,CHORD);

 
fill(handcolor) 

  arc(118+261+6,219,25/2,25/2,PI,0); 
  //outside right hand 
  arc(283+9+6,158+31,25/2,25/2,0,PI); 
  //outside left hand 
  //assign blendhands to color 220 (offwhite/backround color) 
  fill(blendhands) 
  //make inner left and right hands blend in with backdrop) 
  arc(118+261+6,219,15/2,15/2,PI,0); 
  //inside right hand
  arc(283+9+6,158+31,15/2,15/2,0,PI); 
  //inside left hand 
   fill(insideofbot)
  //make sure the rest of the robot also doesnt match backdrop because of the hand blend command 
  rect(160+155+6, 170+26, 80/2, 50/2, 5);
  //body 
  rect(170+150+6, 180+21, 60/2, 30/2, 5);
  //inner body 

  fill(greenbutton) 
  //makes green button green 
  ellipse(165+152+6,186+17,5/2,5/2);
  //green button
  fill(yellowbutton)
  //makes yellow button yellow 
  ellipse(165+152+6,196+13,5/2,5/2);
  //yellow button 
  fill(redbutton)
  //makes red button red 
  ellipse(165+152+6,206+9,5/2,5/2);
  //red button
  fill(insideofbot) 
  //makes sure entire but doesn't become red 

  
stroke(17, 231, 108) 
  //colors lifeline green 
  line(322+6,209,329+6,209)
  //top lifeline first segment 
  line(329+6,209,332+6,213);
  //top lifeline second segment 
  line(332+6,213,337+6,203)
  //top lifeline fourth segment 
  line(337+6,203,340+6,209)
  //top lifeline fifth segment 
  line(340+6,209,349+6,209) 
  //top lifeline sixth segment 
  stroke(0,0,0)
  //makes sure the rest of the bot stays black, not green
    fill(headcolor) 
  rect(145+163+6, 80+70, 110/2, 80/2, 10);
  //head 
  rect(197+137.5+6,48+85,5/2,20/2);
  //rectangle head piece 
  arc(200+136+6,80+70,25/2,25/2,PI,0,CHORD);
  //half circle head piece 
  ellipse(200+135.5+6, 49+82, 20/2, 5/2);
  //top part of head piece 
  
  fill(outereyecolor)
  ellipse(225+122+6,115+51,25/2,25/2);
  //right eye outer
  strokeWeight(3);
  //make inner eye darker
  ellipse(175+149+6,115+51,25/2,25/2);
  //left eye outer 
  fill(insideofbot) 
  strokeWeight (1) 
  //make rest of bot normal stroke weight


  fill(innereyecolor)
  ellipse(175+149+6,115+51,15/2,15/2);
  //left eye inner
  strokeWeight(3);
  //make inner eye darker
  ellipse(225+122+6,115+51,15/2,15/2);
  //right eye inner
  fill(insideofbot)
  strokeWeight(1);
  //make rest of bot normal stroke weight 
  
  fill(headcolor) 
  rect(160+156+6, 135+40, 80/2, 20/2, 3);
  //outer mouth
  fill(insideofbot)
  strokeWeight(6);
  //make inner mouth darker 
  arc(200+136+6,152+30,50/4,10/3,PI,0,CHORD);
  //inside mouth
  strokeWeight(1);
  //make rest of bot normal stroke weight
  }
function shoeColor(){
  shoecolor=color(random(0,255),random(0,255),random(0,255))
} 
function headColor(){
  headcolor= color(random(0,255),random(0,255),random(0,255)) 
} 
function neckColor(){
  neckcolor = color(random(0,255),random(0,255),random(0,255))
} 
function eyeColor(){
  eyecolor = color(random(0,255),random(0,255),random(0,255))
} 
function armColor(){
  armcolor = color(random(0,255),random(0,255),random(0,255))
} 
function handColor(){
  handcolor = color(random(0,255),random(0,255),random(0,255))
} 
function legColor(){
  legcolor = color(random(0,255),random(0,255),random(0,255))
} 
class Bubble {
  constructor(x,y,r){
    this.x=x
    this.y=y
    this.r=r
  } 
move(){
  this.x=this.x + random (-5,5)
  this.y = this.y + random (-5,5) 
}
  show(){ 
noStroke() 
fill(mouseX,mouseY,200,20)
beginShape()
  ellipse(this.x,this.y,this.r*1.5) 
  ellipse(this.x,this.y,this.r*1.25) 
    ellipse(this.x,this.y,this.r)
  ellipse(this.x,this.y,this.r*.75) 
  ellipse(this.x,this.y,this.r*.5)
    ellipse(this.x,this.y,this.r*.25)

endShape()
 stroke(1)    
  } 
}
  