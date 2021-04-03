const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1;
var platform;
var ball, slingshot;

var gameState = "onSling";

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(330, 405, 430, 50);

    block1 = new Block(330,235,30,40);
    block2 = new Block(360,235,30,40);
    
    block3 = new Block(390,235,30,40);
    block4 = new Block(420,235,30,40);
   

  

    block5 = new Block(450,235,30,40);
   

    ball = new Ball(200,50,20);

    //log6 = new Log(230,180,80, PI/2);
    chain = new SlingShot(ball.body,{x:200, y:50});
}

function draw(){
   
    Engine.update(engine);
    //strokeWeight(4);
    block1.display();
    block2.display();
    ground.display();
    

    block3.display();
    block4.display();
    ball.display();

    block5.display();
    

    
    platform.display();
    //log6.display();
    chain.display();    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    }
}


slingShot.display();

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}