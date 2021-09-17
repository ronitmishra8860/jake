var track,trackImage;
var boy,boyImage
var left,right

function preload(){
  //pre-load images
  trackImage=loadImage("path.png")
  boyImage=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track=createSprite(200,200)
  track.addImage(trackImage)
  track.velocityY=4
  track.scale=1.2
  boy=createSprite(180,340,30,40)
  boy.addAnimation("jakeRunning",boyImage)
  boy.scale=0.08
  left=createSprite(0,0,100,800)
  left.visible=false
  right=createSprite(410,0,100,800)
  right.visible=false
}

function draw() {
  background(0);
  boy.x=mouseX
  boy.collide(left)
  boy.collide(right)
  if(track.y>400){
track.y=200
  }
  drawSprites()
}
