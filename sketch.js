var ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new paper(200,400,30);

	box1 = new box(880,350,20,100);
	box2 = new box(1120,350,20,100);
	box3 = new box(1000,390,220,20);

	ground = new Ground(600,450,1200,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball.display();
  box1.display();
  box2.display();
  box3.display();

  ground.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed(){
	if (keyDown('UP_ARROW')){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:9,y:-8})
	}
}