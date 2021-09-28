function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES)
}

 

function draw() {
  
  translate(300,300)
  
  background(239,81,118);
  textSize(30);
  textAlign(CENTER);
  strokeWeight(7);
  push()
  stroke(0,0,0)
  text('12',0,-160);
  rotate(360/12)
  text('1',0,-160);
  rotate(360/12)
  text('2',0,-160);
  rotate(360/12)
  text('3',0,-160);
  rotate(360/12)
  text('4',0,-160);
  rotate(360/12)
  text('5',0,-160);
  rotate(360/12)
  text('6',0,-160);
  rotate(360/12)
  text('7',0,-160);
  rotate(360/12)
  text('8',0,-160);
  rotate(360/12)
  text('9',0,-160);
  rotate(360/12)
  text('10',0,-160);
  rotate(360/12)
  text('11',0,-160);
  pop()
  
  fill(239,81,118)
  push()
  rotate(-90)
  stroke(3,252,157)
  arc(0,0,280,280,0,second()*6)
  pop()
  
  push()
  rotate(-90)
  stroke(255,252,252)
  arc(0,0,250,250,0,minute()*6)
  pop()
  
  push()
  rotate(-90)
  stroke(0)
  arc(0,0,220,220,0,hour()*30)
  pop()
  
  push()
  rotate(minute()* 6)
  stroke(255,252,252)
  line(0,0,0,-75)
  pop()
  
  push()
  let h = hour() % 12
  rotate(h*30)
  stroke(0)
  line(0,00,0,-50)
  pop()
  
  push()
  rotate(second()*6)
  stroke(3,252,157)
  line(0,0,0,-100)
 pop()

  rotate(0)
  textSize(20);
  strokeWeight(4);
  stroke(0)
  h = hour();
text(h, -140, 236);
  let m = minute();
text( 'Current Time: \n : '+ m, -108, 210);
  let s = second();
text( ': '+ s, -70, 235);
  
  strokeWeight(4);
  stroke(0)
  textSize(20);
  let mon = month();
text(mon, 75, 236);
  let d = day();
text('Month/Day: \n : ' + d, 100, 210);
  
  
  
}