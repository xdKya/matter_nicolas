//Mundo físico
const World = Matter.World;
//Mecanismo físico
const Engine = Matter.Engine;
//Corpo Físico (objetos)
const Bodies = Matter.Bodies;

var engine, world;
var chao;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var chao_options = {
    isStatic: true
  }

  chao = Bodies.rectangle(200,390,400,20,chao_options);
  World.add(world,chao);

  console.log(chao);
  
}

function draw() {
  background(0);  

  Engine.update(engine);
  
  fill("green");
  rectMode(CENTER);
  rect(chao.position.x,chao.position.y,400,20);
}