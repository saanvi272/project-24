
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustbinmaterial1,dustbinmaterial2,dustbinmaterial3;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground = new Ground(650,650,1300,10);

dustbinmaterial1 = new Dustbin(1100,630,200,20);
dustbinmaterial2 = new Dustbin(990,580,20,100);
dustbinmaterial3 = new Dustbin(1210,580,20,100);

paper = new Paper(300,645,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(RADIUS);
  background(0);
  
 ground.display();
 dustbinmaterial1.display();
 dustbinmaterial2.display();
 dustbinmaterial3.display();
 paper.display();
}
function keyPressed(){
if(keyCode===32){
Matter.Body.applyForce(paper.body, paper.body.position, {x:170,y:-170});
}
}

