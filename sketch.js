const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;
var ground;
var bin, paper;
var side1;


function preload()
{

}

function setup() {
  createCanvas(1200, 400);

	engine = Engine.create();
  world = engine.world;

 //Create the Bodies Here.
	side1 = new Bin();
  ground = new Ground(600,height,1200,20);
  paper = new Paper();

	Engine.run(engine);

}


function draw() {
  background(245,245,245);
  rectMode(CENTER);
  

  paper.display();
  ground.display();
  side1.display();


  drawSprites();
}
  function keyPressed() {
    if (keyCode === UP_ARROW) {
      // Look at the hints in the document and understand how to make the package body fall only on
      Matter.Body.applyForce(paper.body, paper.body.position,{x:75,y:-75});
     }
   }