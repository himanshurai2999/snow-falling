var snowImg1, snow2Img, snow3Img,snow4Img,snow5Img,
var snow , 
var snow, snowBody;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	snowImg = loadImage("Images/snow1.png");
	snowImg = loadImage("Images/snow2.pmg");
	snowImg = loadImage("Images/snow3.png");
	snowImg = loadImage("Images/snow4.png");
snowImg = loadImage("Images/snow5.png");
}






Engine.run(engine);




  function setup() {
    createCanvas(800, 750);
  
    // fairyVoice.play();
  
    snow4 = createSprite(130, 520);
    snow.addAnimation("snowFalling",snow4Img);  
    snow.scale =0.25;

    snow5 = createSprite(130, 520);
    snow.addAnimation("snowFalling",snow5Img);  
    snow.scale =0.25;
   
  
    engine = Engine.create();
    world = engine.world;
  
    starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
    World.add(world, starBody);
    
    Engine.run(engine);
  
  }
  
  
}

function draw() {
  background(snowImg);  
  drawSprites();
}