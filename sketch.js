var fixedRect, movingRect;
var o1, o2;

function setup() {
  createCanvas(1200, 800);
  // fixedRect = createSprite(400, 100, 50, 80);
  // fixedRect.shapeColor = "green";
  // fixedRect.debug = true;

  // movingRect = createSprite(400, 800,80,30);
  // movingRect.shapeColor = "green";
  // movingRect.debug = true;

  // movingRect.velocityY = -5;
  // fixedRect.velocityY = +5;

  o1 = createSprite(200, 200, 50, 50);
  o1.shapeColor = "green";
  o1.velocityX = +5;

  o2 = createSprite(600, 200, 70, 70);
  o2.shapeColor = "green";
  o2.velocityX = -5;
}

function draw() {
  background(0);
  bounceOff(o1, o2);
  drawSprites();
}
