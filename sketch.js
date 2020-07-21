var fixedRect, movingRect;
var ob1,ob2,ob3,ob4,ob5,ob6;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect= createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -1;
  fixedRect.velocityY = +1;

ob1=createSprite(100,300,50,50)
ob1.shapeColor="green"
ob1.debug=true;
ob2=createSprite(800,300,40,40)
ob2.shapeColor="green"
ob2.debug=true;

ob1.velocityX=4
ob2.velocityX=-4

}

function draw() {
  background(0,0,0);  
bounceOff(movingRect,fixedRect)
bounceOff(ob1,ob2)
  drawSprites();
}



