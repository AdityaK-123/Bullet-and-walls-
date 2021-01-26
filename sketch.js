var thickness , wall;
var bullet , speed , weight;

function setup() {
  createCanvas(1400,400);
  bullet = createSprite(50, 200, 50, 20);
  bullet.shapeColor="darkbrown";
  bullet.debug=true;
  wall = createSprite(1300,200,thickness,height/2);
  wall.shapeColor="black";
  wall.debug=true;
  
  thickness=random(22,83);
  speed=random(220,320);
  weight=random(30,52);
}

function draw() {
  background("skyblue"); 
  
  bullet.velocityX=speed;
 
  if(Collided(bullet,wall)){
    
    bullet.velocityX=0;
    var D= 0.5 *weight *speed *speed/(thickness *thickness *thickness);

    if(D>10){
      wall.shapeColor = "red";
    }
    if(D<10){
      wall.shapeColor = "limegreen";
    }
    
  }

  drawSprites();
}

function Collided(B,W){
  if(B.x + B.width >=W.x ){

    return true;
  }
  else{
    return false;
  }
}

