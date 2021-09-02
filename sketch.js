const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;



var angle=60;
function preload(){
  bg= loadImage("images/iss.png");
  sleep=loadAnimation("images/sleep.png");
  brush= loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
  eat=loadAnimation("images/eat1.png","images/eat2.png");
  drink=loadAnimation("images/drink1.png","images/drink2.png");
  move=loadAnimation("images/move.png","images/move1.png");
}



function setup() {
  createCanvas(400, 400);

  anstornut=createSprite(300,230);
  anstornut.addAnimation("sleeping",sleep);
  anstornut.scale=0.1;
}

function draw() {
  background(220);
drawSprites();

  if (keyDown("up_ARROW")){
    anstornut.addAnimation("brushing",brush);
    anstornut.changeAnimation("brushing",brush);
    anstronut.y=350;
    anstornut.velocityX=0;
    anstornut.velocityY=0;
  }
  if (keyDown("DOWN_ARROW")){
    anstronut.addAnimation("gymming",gym);
    anstronut.changeAnimation("gymming",gym);
    anstronut.y = 350;
    anstronut.X=0;
    anstronut.Y=0;
  }
  if (keyDown(LEFT_ARROW)){
    anstronut.addAnimation("bathing",bath);
    anstronut.changeAnimation("bathing",bath);
    anstronut.y=350;
    anstronut.velocityX=0;
    anstronut.velocityY=0;
  }


}