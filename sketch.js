
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree,treeImage;
var mango,mangoImage;
var boy,boyImage;
var stone,stoneImage;

function preload()
{
	treeImage=loadImage("tree.png");
	boyImage=loadImage("boy.png");
	mangoImage=loadImage("mango.png");
	stoneImage=loadImage("stone.png");
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree=createSprite(1000,430);
	tree.addImage(treeImage);
	tree.scale=0.36;

	boy=createSprite(200,577);
	boy.addImage(boyImage);
	boy.scale=0.12;

	Engine.run(engine);

    stone=createSprite(130,500);
	stone.addImage(stoneImage);
	stone.scale=0.08;

}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  drawSprites();

}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

