var movingrect, fixedrect;
function setup() {
  createCanvas(800,400);
  movingrect= createSprite(400, 200, 50, 100);
  fixedrect= createSprite(100, 200, 50, 50);
  movingrect.shapeColor="red";
  fixedrect.shapeColor="green";
  movingrect.velocityX=-3;
  fixedrect.velocityX =4;

}

function draw() {
  background(0);  
  
  if(movingrect.x - fixedrect.x <= fixedrect.width/2 + movingrect.width/2
    && fixedrect.x - movingrect.x <= fixedrect.width/2 + movingrect.width/2)
    {
    movingrect.velocityX = movingrect.velocityX * (-1);
    fixedrect.velocityX = fixedrect.velocityX * (-1);
  }
  if(movingrect.y - fixedrect.y <= fixedrect.height/2 + movingrect.height/2
    && fixedrect.y - movingrect.y <= fixedrect.height/2 + movingrect.height/2){
    movingrect.velocityY = movingrect.velocityY* (-1);
    fixedrect.velocityY = fixedrect.velocityY * (-1);
  
  }

  drawSprites();
}