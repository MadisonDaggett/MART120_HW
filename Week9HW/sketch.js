function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(255,128,128);
    fill(0,0,0);
    textSize(22)
    text("It's Me!", 20,40);
    
    //hair behind head
    fill(90,60,30);
    rect(100,200,200,300);
    
  //neck
    fill(255,204,153);
    rect(165,300,70,200);
    
  // head
    fill(255,204,153);
    ellipse(200,200,200,250);
    
    //eyes
    fill(255,255,255);
  ellipse(250,180,30,15);
    ellipse(150,180,30,15);
    line(230,150,260,150);
    line(130,150,165,150);
    
    //pupils
    strokeWeight(5);
    fill(0);
    point(250,180);
    point(150,180);
    
    //nose
    fill(255,128,128);
    triangle(180,240,200,200,220,240);
    
    //mouth
    fill(153,51,102);
    ellipse(200,275,30,10);
    
    //hair
    fill(90,60,30);
    triangle(200,70,350,300,280,80);
    triangle(200,70,50,280,120,80);
    
    //text
    fill(255,255,255);
    textSize(20);
    text("Madison Daggett",240,380);
  }