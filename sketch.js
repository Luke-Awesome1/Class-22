//namespacing 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;

var engine,world;
var ground,ball;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  } //JSON
  ground = Bodies.rectangle(200,height,400,20,options);
  World.add(world,ground);

  var options1 = {
    restitution: 1.0
  }

  ball = Bodies.circle(200,200,20,options1);
  World.add(world,ball);
  
  console.log(ground);
  console.log(ground.position.x);
  console.log(ground.position.y);
}

function draw() {
  background("lightblue");  
  Engine.update(engine);
  
  rectMode(CENTER);
  fill("red");
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  fill("green");
  ellipse(ball.position.x,ball.position.y,20,20);
}
