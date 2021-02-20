
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof,rope,pend,rope1;
var bob1, bob2, bob3, bob4, bob5,bobDiameter;
//var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(0,0);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof=new Roof(500,200,300,30);
    bob1=new pendulam(500,400,50,50);
    bob2=new pendulam(450,400,50,50);
    bob3=new pendulam(400,400,50,50);
	bob4=new pendulam(550,400,50,50);
	bob5=new pendulam(600,400,50,50);
 
	

	Engine.run(engine);
  
}


function draw()
 {
  rectMode(CENTER);
  background(0);

	roof.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	
	rope1=new Rope(bob1.body,roof.body,(-bobDiameter*2), 0);

	rope1.display();

	
  
  drawSprites();
 
}



