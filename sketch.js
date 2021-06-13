
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, ground
var dustbin1, dustbin2, dustbin3

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = new Dustbin(870, 675, 200, 20)
	dustbin2 = new Dustbin(970, 625, 20, 100)
	dustbin3 = new Dustbin(770, 625, 20, 100)
	paper = new Paper(100, 635, 20)
	ground = new Ground(500, 690, 1000, 20)

	Engine.run(engine);
  
}


function draw() {
  background(0);
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:75, y:-75});
	}
}