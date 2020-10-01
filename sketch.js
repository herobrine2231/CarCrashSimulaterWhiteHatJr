var wall,car1;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
weight = random(400,1500);
 
  car1 = createSprite(50, 200, 50, 50);
 //car1.shapeColor = "black";

 wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = color(80,80,80);
  car1.velocityX = speed;
}

function draw() {
  background("gray");  
  if(wall.x-car1.x< (car1.width +wall.width )/2)
  {
    car1.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
     car1.shapeColor=color(255,0,0);
    }
    if(deformation<180 &&deformation>100)
    {
    car1.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      car1.shapeColor=color(0,255,0);
    }

  }
  drawSprites();
  
}
