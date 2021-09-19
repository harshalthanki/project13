var garden,rabbit;
var apple=[];
var orange=[];
var green=[];
var red=[];
var gardenImg,rabbitImg,appleImg,orangeImg,greenImg,redImg;
var appleScore = 0;
var orangeScore = 0;
var greenScore = 0;
var redScore = 0;
var ACnt = 1;
var OCnt = 1;
var GCnt = 1;
var RCnt = 1;
var ACntr = 1;
var OCntr = 1;
var GCntr = 1;
var RCntr = 1;

function preload()
{
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  greenImg = loadImage("leaf.png");
  redImg = loadImage("redImage.png");
}

function setup()
{
  
  createCanvas(400,400);
  
garden=createSprite(200,200);
garden.addImage(gardenImg);

rabbit = createSprite(180,340,30,30);
rabbit.scale =0.07;
rabbit.addImage(rabbitImg);

apple = createSprite(30,50);
apple.addImage(appleImg)
apple.scale = 0.08;

green = createSprite(30,150);
green.addImage(greenImg)
green.scale = 0.08;

red = createSprite(30,250);
red.addImage(redImg)
red.scale = 0.08;

orange = createSprite(30,350);
orange.addImage(orangeImg)
orange.scale = 0.08;
}

function draw() 
{
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;

  drawSprites();
  createApples();
  createGreenLeaves();
  createRedLeaves();
  createOrangeLeaves();
      fill("black")
      textSize(40)
      stroke("white")
      strokeWeight(2)
      text(" : " + appleScore, 45,65)

      fill("black")
      textSize(40)
      stroke("white")
      strokeWeight(2)
      text(" : " + greenScore, 45,165)

      fill("black")
      textSize(40)
      stroke("white")
      strokeWeight(2)
      text(" : " + redScore, 45,265)

      fill("black")
      textSize(40)
      stroke("white")
      strokeWeight(2)
      text(" : " + orangeScore, 45,365)

}

function createApples()
{
  if(frameCount % 80 == 0)
  {
    apple[ACnt] = createSprite(300,-100);
    apple[ACnt].lifetime=500;
    apple[ACnt].x = Math.round(random(50,385))
    apple[ACnt].y = Math.round(random(-300,-200))
    apple[ACnt].addImage(appleImg);
    apple[ACnt].velocityY = 5;
    apple[ACnt].scale = 0.05;
    apple[ACnt].depth = rabbit.depth;
    ACnt++;
  }
  
  for (var a = ACntr; a < ACnt; a++)
  {
    if(apple[a].isTouching(rabbit))
    {
      apple[a].destroy();
      appleScore += 1;
      ACntr=a;
    }
  }
}

function createGreenLeaves()
{
  if(frameCount % 80 == 0)
  {
    green[GCnt] = createSprite(300,-100);
    green[GCnt].lifetime=500;
    green[GCnt].x = Math.round(random(50,385))
    green[GCnt].y = Math.round(random(-300,-200))
    green[GCnt].addImage(greenImg);
    green[GCnt].velocityY = 6;
    green[GCnt].scale = 0.05;
    green[GCnt].depth = rabbit.depth;
    GCnt++;
  }
  
  for (var g = GCntr; g < GCnt; g++)
  {
    if(green[g].isTouching(rabbit))
    {
      green[g].destroy();
      greenScore += 1;
      GCntr=g;
    }
  }
}

function createRedLeaves()
{
  if(frameCount % 80 == 0)
  {
    red[RCnt] = createSprite(300,-100);
    red[RCnt].lifetime=500;
    red[RCnt].x = Math.round(random(50,385))
    red[RCnt].y = Math.round(random(-300,-200))
    red[RCnt].addImage(redImg);
    red[RCnt].velocityY = 7;
    red[RCnt].scale = 0.05;
    red[RCnt].depth = rabbit.depth;
    RCnt++;
  }
  
  for (var r = RCntr; r < RCnt; r++)
  {
    if(red[r].isTouching(rabbit))
    {
      red[r].destroy();
      redScore += 1;
      RCntr=r;
    }
  }
}

function createOrangeLeaves()
{
  if(frameCount % 80 == 0)
  {
    orange[OCnt] = createSprite(300,-100);
    orange[OCnt].lifetime=500;
    orange[OCnt].x = Math.round(random(50,385))
    orange[OCnt].y = Math.round(random(-300,-200))
    orange[OCnt].addImage(orangeImg);
    orange[OCnt].velocityY = 8;
    orange[OCnt].scale = 0.05;
    orange[OCnt].depth = rabbit.depth;
    OCnt++;
  }
  
  for (var o = OCntr; o < OCnt; o++)
  {
    if(orange[o].isTouching(rabbit))
    {
      orange[o].destroy();
      orangeScore += 1;
      OCntr=o;
    }
  }
}



