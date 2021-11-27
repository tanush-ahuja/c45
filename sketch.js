//Declare variable for background & backgroundImage
var background, background_img
var player, shooterImg1,shooterImg2

function preload()
{
  //Load allImages
background_img = loadImage("assets/bg.jpeg");
shooterImg1 = loadImage("assets/shooter_2.png");
shooterImg2 = loadImage("assets/shooter_3.png");


}

function setup() 
{
  //Create a Canvas which takes windowWidth & windowHeight
  createCanvas(windowWidth,windowHeight);

  //create sprite for the background than add the background image scale it if needed
background = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);


background.addImage(background_img)
background.scale=1.47333333333333333333333
  

  //create the player sprite,Add Image scale if needed
  player = createSprite(displayWidth-1550,displayHeight-410,50,50);
player.addImage(shooterImg1)
player.scale = 0.6
player.debug =true
player.setCollider("rectangle", 0,0,260,390)
}

function draw() 
{
//

  //moving the player up and down 
  if(keyDown("W")){
    player.y=player.y-15
  }
  if(keyDown("S")){
    player.y=player.y+15
  }

  //release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("P")){
  player.addImage(shooterImg2)

}

  //player goes back to original standing image once we stop pressing the space bar
if(keyWentUp("P")){
  player.addImage(shooterImg1)
  
}

  //write code from P5.play.js to  display all object 








  drawSprites();
}
