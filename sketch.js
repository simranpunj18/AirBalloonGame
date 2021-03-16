var balloon; 
var balloonImg; 
var background; 
var backgroundImg; 



function setup(){
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  balloon = createSprite(200,400,100,200); 
  background = createSprite(300,500,300,200);
}

if(keyDown(LEFT_ARROW)){
  balloon.x = balloon.x-10;
}
if(keyDown(RIGHT_ARROW)){
  balloon.x = balloon.x+10;
}
if(keyDown(UP_ARROW))[
  balloon.y = balloon.y -10;
if(keyDown(DOWN_ARROW)){
  balloon.y = balloon.y +10;
} 
if(keyDown(UP_ARROW)){
  updateHeight(0,-10);
  balloon.addAnimation("hotAirBalloon",balloonImage2); 
  balloon.scale=balloon.scale -0.01;
}
var balloonPosition=dataBase.ref('balloon/height'); 
balloonPosition.on("value",readPosition,showError);

function updateHeight(x,y){
  dataBase.ref('balloon/height').set({
    'x': height.x + x , 
    'y': height.y + y
  })
}
fuction readHeight(data){
  height = data.val(); 
  balloon.x = height.x; 
  balloon.y = height.y;
}

function showError(){
  console.log("Error in writing to the dataBase");
}
