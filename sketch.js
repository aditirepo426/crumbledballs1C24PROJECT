
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball ;
var rect1 ,rect2,rect3,ground,paperObject;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	
	rect1 = new Dustbin (1100,575,20,100);
	rect2 = new Dustbin(1300,575,20,100);
	rect3 = new Dustbin(1200,635,200,20);
	paperObject = new Paper(200,450,40);
	console.log(paperObject);
	ground = new Ground(width/2,650,width,10);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);

	
	rect1.display();
	rect2.display();
	rect3.display();
	paperObject.display();
	ground.display();
   
}

function keyPressed(){
	if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x: 85,y: -85})
	console.log(paperObject.body);

	}
}



