const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var circleS,ground1,ground2,ground3,ground4,ground5,sling;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(400,390,800,10)
  ground2 = new Ground(400,250,160,10)
  ground3 = new Ground(650,170,160,10)
  ground4 = new Ground(800,200,10,400)
  ground5 = new Ground(400,0,800,10)

  circleS = new Striker(100,200);

  sling = new SlingShot(circleS.body,{x: 100,y: 180})

  box1 = new Box1(340,220)
  box2 = new Box2(370,220)
  box3 = new Box3(400,220)
  box4 = new Box1(430,220)
  box5 = new Box2(460,220)
  box6 = new Box3(370,190)
  box7 = new Box1(400,190)
  box8 = new Box2(430,190)
  box9 = new Box3(400,160)

  box10 = new Box3(590,140)
  box11= new Box1(620,140)
  box12 = new Box2(650,140)
  box13 = new Box3(680,140)
  box14 = new Box1(710,140)
  box15 = new Box2(620,110)
  box16 = new Box3(650,110)
  box17 = new Box1(680,110)
  box18 = new Box3(650,80)
  

}

function draw() {
  background(0);  

  Engine.update(engine);

  push();
  fill("white")
  strokeWeight(5)
  stroke(252, 3, 127)
  textSize(20)
  text("Drag the ball with mouse and release it towards the blocks",50,30) 
  text("Press space to get another chance to play!!",50,60)
  pop();

  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  ground5.display();

  circleS.display();

  sling.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box18.display();
  box17.display();

}
function mouseDragged() {
  Matter.Body.setPosition(circleS.body,{x: mouseX, y:mouseY} )
  
}

function mouseReleased(){
  sling.fly();
}
function keyPressed() {
  if (keyCode === 32){
      sling.attach(circleS.body);
  }
}