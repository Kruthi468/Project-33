const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bg, ground, reindeer, reindeerImg, brown, brownImg, black, blackImg, grey, greyImg;
var engine
var ice1=[];
var ice2=[];
var snow1=100;
var snow2=100;
function preload(){
bg=loadImage("snow1.jpg");
reindeerImg=loadAnimation("reindeer1.png","reindeer2.png","reindeer3.png","reindeer4.png","reindeer5.png","reindeer6.png","reindeer7.png","reindeer8.png","reindeer9.png");
brownImg=loadAnimation("brown1.png","brown2.png","brown3.png","brown4.png","brown5.png","brown6.png","brown7.png","brown8.png");
blackImg=loadAnimation("black1.png","black2.png","black3.png","black4.png","black5.png","black6.png","black7.png","black8.png");
greyImg=loadAnimation("grey1.png","grey2.png","grey3.png","grey4.png","grey5.png","grey6.png");

}
function setup() {
  createCanvas(1300,800);

  engine = Engine.create();
 world = engine.world;

  ground=createSprite(600,1300,1310,610);
  ground.visible=false;

  reindeer=createSprite(50,380);
  reindeer.addAnimation("running", reindeerImg);
  reindeer.scale=3.1;
  reindeer.velocityX=6;
  reindeer.setCollider("rectangle",15, -20,100,180);

  brown=createSprite(1225,580);
  brown.addAnimation("hopping", brownImg);
  brown.scale=1.1;
  brown.velocityX=-6;
  brown.setCollider("rectangle",15, -20,100,180);

  black=createSprite(875,700);
  black.addAnimation("jumping", blackImg);
  black.scale=1.5;
  black.velocityX=-6;
  black.setCollider("rectangle",15, -20,100,180);

  grey=createSprite(50,580);
  grey.addAnimation("skipping", greyImg);
  grey.scale=1;
  grey.velocityX=6;
  grey.setCollider("rectangle",15, -20,100,180);


  if(frameCount % 20 === 0){
    for(var i=0; i<snow1; i++){
    ice1.push(new Snow1(random(width/2-400,width/2+400),2,5));
    }
    }

    if(frameCount % 20 === 0){
      for(var j=0; j<snow2; j++){
        ice2.push(new Snow2(random(width/2-400,width/2+400),2,5));
      }
}}

function draw() {
  background(bg);  
  
  Engine.update(engine);

  reindeer.collide(ground);
  brown.collide(ground);

  if(reindeer.x > 1250){
    reindeer.x=50;
  }
  if(brown.x < 800){
    brown.x=1225;
  }
  if(black.x < 325){
    black.x=975;
  }
  if(grey.x > 500){
    grey.x=50;
  }

  
   
  for(var i = 0;i < snow1; i++){
    ice1[i].display();
    ice1[i].changePosition();
    }   

    for(var j = 0;j < snow2; j++){
      ice2[j].display();
      ice2[j].changePosition();
      }   


  reindeer.display();
  brown.display();
  black.display();
  grey.display();

  drawSprites();

}