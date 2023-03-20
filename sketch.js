
let gameStart;
let ball;
let brick;
let bricks =[];
let pointX,
pointY;

function setup() {
gameStart = 0;
createCanvas(windowWidth,windowHeight);



ball = new Ball();
for(let i=0;i<7;i++){
  brick = new Brick()
  bricks.push(brick);}
}


function draw() {
  clear();
  background(0)
pointX=random(0,windowWidth);
pointY=random(0,windowHeight);
stroke('blue')
 point(pointX,pointY);
 strokeWeight(20);
fill('blue')
 RecX =random(0,windowWidth)
 rect(RecX,840,160,40);
if (gameStart==0){
  fill('black')
  text('Press enter to Start',width/2,height/2);
  textSize(64);
  textAlign(CENTER);
}
if (gameStart==1){
background(0);
ball.BallAppear();
ball.BallMove();
ball.BallBounce();
movePaddle();
Collide();

if (ball.yCirc>height){
  gameOver()
}

}}


//Functions and classes//

function Collide (){
  for(let j=0; j<bricks.length;j++){
    if (ball.intersects(bricks[j])){
      bricks.splice(j,1);
      ball.ysp *= -1;}
      else {
      bricks[j].brickAppear();}}
}
function movePaddle(){
  fill(0,0,255)      
  rectMode(CORNER)      //Allowing movement to the paddle
  rect(mouseX,840,160,40);
}
class Ball{
  constructor()
{ this.xCirc = width/2;
  this.yCirc = height/2;
  this.ysp = 3;
  this.xsp = 3;
  this.radius=30;
  this.diameter=60;
 this.intersects=function(brick){
    let d = dist(this.xCirc,this.yCirc,brick.loc.x,brick.loc.y); //distance between center of ball and center of bricks
    if (d<this.diameter+ 35.35){   
      return true;
    }
  else{
    return false
  }
  } 
}
      BallAppear(){
        fill(0,0,255)              
        circle(this.xCirc,this.yCirc,this.diameter);}
      BallMove(){
        this.yCirc+=this.ysp;
        this.xCirc+=this.xsp;}
      BallBounce(){
        if ((this.xCirc>=(mouseX) &&  this.xCirc<(mouseX+160)) && this.yCirc>810){   //Ball bouncing from paddle
          this.ysp *=-1;
          }
    

        else if (this.xCirc>windowWidth){    // Ball bouncing from right sidewall
            this.xsp *= -1;
            }
        else if(this.xCirc<0){   //Ball bouncing from left sidewall
                this.xsp *= -1;
            } 
        else if ( this.yCirc<0){    // Ball bouncing from top walls
              this.ysp *= -1;
              } 
          }
          
        }
  class Brick {
  constructor (){
  this.loc = createVector(random(100,width-200), random (100,height-500))
  this.width =50;
  this.height=50;
  this.brickAppear = function(){
  rectMode(CENTER);
  rect(this.loc.x,this.loc.y,this.width,this.height);
  }
}}

function gameOver(){
  background(0);
  	textSize(64);
  	textAlign(CENTER);
  	fill(48,213,200);
    noStroke()
  	text("GAME OVER",width/2,height/2);
}
function keyPressed(){
  if (keyCode===ENTER){
    gameStart=1;
  }
}