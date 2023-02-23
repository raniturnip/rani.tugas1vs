let j;
function setup() {
  // put setup code here
  createCanvas(400,200);
  j = 0;
}

function draw() {
  // put drawing code here
  background(255,0,0);


  strokeWeight(0)
  fill(255,255,255)
  ellipse(100,75,78,70) // badan atas
  ellipse(100,122,98,99) // badan bawah
  ellipse(55,80,30,60) // tangan kanan
  ellipse(140,80,30,60) // tangan kiri
  
  arc(110,150,45,100, radians(-30), radians(190)) // kaki kanan) 
  ellipse(100,35,45,30) // kepala

  

  strokeWeight(0)
  fill(255,255,255)

  arc(85,150,45,100, radians(40), radians (-150)) // kaki kiri )
  strokeWeight(6)
  point(90,33) // mata kiri
  point(110,33) // mata kanan
  strokeWeight(1)
  fill(0,0,0)
  line(200,0,200,400)
  line(95,33,105,33)

  ///////////////////////////////////////
  
  strokeWeight(0)
  fill(255,255,255)
  ellipse(300,75,78,70) // badan atas
  ellipse(300,122,98,99) // badan bawah
  
  
  arc(310,150,45,100, radians(-30), radians(190)) // kaki kanan 
  ellipse(300,35,45,30) // kepala

  strokeWeight(6)
  point(290,33) // mata kiri
  point(310,33) // mata kanan

  

  var x = 33 + 1*Math.sin(j/20);
  var y = 295 + 1*Math.sin(j/20);
  j += 0.5;
  strokeWeight(1)
  fill(0,0,0)
  line(y,x,305,x)


  var x = 33 + 1*Math.sin(j/20);
  var y = 295 + 1*Math.sin(j/20);
  j += 0.5;
  strokeWeight(0)
  fill(255,255,255)
  arc(285,150,45,100, radians(40), radians (-150)) // kaki kiri 
  
  var y = 30 + 2*Math.sin(j/20);
  var x = 255 + 2*Math.sin(j/20);
  j += 2;
  strokeWeight(0)
  ellipse(x,80,y,60) // tangan kanan

  var y = 30 + 2*Math.sin(j/20);
  var x = 65 + 2*Math.sin(j/20);
  j += 2;
  strokeWeight(0)
  ellipse(340,80,y,x) // tangan kiri
  
}