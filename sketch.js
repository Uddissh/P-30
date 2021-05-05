const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//making the variables to hold the engine and world
var engine, world;

//making the grounds
var Ground1, Ground2, Ground3;

//making the polygone
var polygon;
var img;
//making the blocks
var Block1, Block2, Block3, Block4, Block5, Block6, Block7, Block8, Block9, Block10, Block11, 
Block12, Block13, Block14, Block15, Block16, Block17, Block18, Block19, Block20, Block21, Block22;

//making the sling
var sling;

//making game states
var PLAY = 1;
var END = 0;
var gameState = PLAY;


function preload() {
  img = loadImage("polygon.png");
}

function setup() {
    createCanvas(1700,780);
  
      engine = Engine.create();
      world = engine.world;
    //Polygon
    //polygon = new Polygon(195,200,20);
    var options = {
      isStatic:false,
      restitution:0.8,
      friction:0.8,
      density:0.5
  }
    polygon = Bodies.circle(105, 200, 20, options)
    World.add(world, polygon);
    
    //Sling
    //console.log(A)
    sling = new Sling(this.polygon,{x:100, y:200})
    //blocks
    Block1 = new Box(600,260,30,40);
    Block2 = new Box(570,260,30,40);
    Block3 = new Box(540,260,30,40);
    Block4 = new Box(630,260,30,40);
    Block5 = new Box(660,260,30,40);
    Block6 = new Box(585,220,30,40);
    Block7 = new Box(555,220,30,40);
    Block8 = new Box(615,220,30,40);
    Block9 = new Box(645,220,30,40);
    Block10 = new Box(600,170,30,40);
    Block11 = new Box(570,180,30,40);
    Block12 = new Box(630,180,30,40);
    Block13 = new Box(600,135,30,40);
    Block14 = new Box(900,170,30,40);
    Block15 = new Box(930,170,30,40);
    Block16 = new Box(870,170,30,40);
    Block17 = new Box(840,170,30,40);
    Block18 = new Box(960,170,30,40);
    Block19 = new Box(900,140,30,40);
    Block20 = new Box(930,140,30,40);
    Block21 = new Box(870,140,30,40);
    Block22 = new Box(900,110,30,40);
    //Sling
    //sling = new Sling(A.body,{x:100, y:200})
  //Grounds
    Ground1 = new Ground(600,285,200,10);
    Ground2 = new Ground(900,195,200,10);
    Ground3 = new Ground(750, 600, 2000, 10);
  
  }
  
  function draw() {
    background("orange"); 
    
    Engine.update(engine);
  
    imageMode(CENTER);
    image(img,polygon.position.x, polygon.position.y, 20 + 20, 20 + 20);
    
    //polygon.display();
    Block1.display();
    Block2.display();
    Block3.display();
    Block4.display();
    Block5.display();
    Block6.display();
    Block7.display();
    Block8.display();
    Block9.display();
    Block10.display();
    Block11.display();
    Block12.display();
    Block13.display();
    Block14.display();
    Block15.display();
    Block16.display();
    Block17.display();
    Block18.display();
    Block19.display();
    Block20.display();
    Block21.display();
    Block22.display();
    Ground1.display();
    Ground2.display();
    Ground3.display();
    sling.display();
  }
  
  function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
  }
  
  function mouseReleased(){
    sling.fly();
  }

  function keyPressed(){
    console.log("attach the polygone")
     if(keyCode === 32){ 
       sling.attach(this.polygon); 
      } 
  }