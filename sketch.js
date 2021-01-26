
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper1;
var dustbin1, dustbin2, dustbin3;
var ground1;
var dustbinobj, dustbinobjp;

function preload(){
  dustbinobjp = loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper1 = new Paper(50, height - 90, 40);

	
  dustbinObj=new Dustbin(900,650);

  
  ground1 = new Ground(width/2, 670, width, 20);
  Engine.run(engine);

	
  
}

function draw() {
  rectMode(CENTER);
  background(180);
  
  ground1.display();
  dustbinObj.display();
  
 
  paper1.display();
  drawSprites();

}

function keyPressed()
{

  if (keyCode === UP_ARROW)
  {

     Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 400, y: -300});

  } 

}