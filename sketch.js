
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, ObstacleGroup
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(500,400);
 
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width /2;
  
  
  survivalTime=0;
 FoodGroup=createGroup();
 ObstacleGroup=createGroup();
}


function draw() {
background("white");
    console.log(monkey.y);
  
    food();
    Obstacle();
  
    stroke("black");
    textSize(20);
    fill("black");
    survivalTime=Math.ceil(frameCount/frameRate());
    text("SURVIVAL TIME: "+ survivalTime,100,50);
  
  if(keyDown("space")&& monkey.y >= 310) {
        monkey.velocityY = -15;
  }
  
      monkey.velocityY = monkey.velocityY + 0.8;     
  
      if (ground.x < 50){
      ground.x = ground.width/2;
    }
  monkey.collide(ground); 
 drawSprites(); 
}

function food(){
   if (frameCount % 80 === 0) {
     var banana=createSprite(500,200,20,20);
     banana.y=Math.round(random(190,270));
     banana.addImage(bananaImage);
     banana.scale=0.1
     banana.velocityX=-5;
     
     banana.lifeTime=200;
     
     FoodGroup.add(banana);
   }
}

function Obstacle(){
  if(frameCount % 300 === 0) {
    var obstacle=createSprite(500,310,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-4;
    obstacle.scale=0.25
    obstacle.lifeTime=200;
    
     ObstacleGroup.add(obstacle);
  }
 
}



