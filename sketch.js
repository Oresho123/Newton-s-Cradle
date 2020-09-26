var bobObject1,bobObject2,bobObject3,
var bobObject4,bobObject5,rope1,
var roofObject,groundObject;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('blue');
  bobObject1= new bobObject(100,200,50,50);
  bobObject2= new bobObject(200,200,50,50);
  bobObject3= new bobObject(300,200,50,50);
  bobObject4= new bobObject(400,200,50,50);
  bobObject5= new bobObject(500,200,50,50);
  groundObject= new groundObject(700,700,100,50); 
  drawSprites();
 
}



