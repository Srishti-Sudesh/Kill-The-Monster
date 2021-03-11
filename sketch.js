const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;

var world, engine;
var bg;

function preload() {
bg = loadImage("images/GamingBackground.png")
}

function setup() {
  createCanvas(1250, 550);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500,450,1200,10);

  block1 = new Block(600,400,50,50);
  block2 = new Block(600,360,50,50);
  block3 = new Block(600,320,50,50);
  block4 = new Block(600,280,50,50);
  block5 = new Block(600,240,50,50);
  block6 = new Block(600,200,50,50);

  block7 = new Block(700,400,50,50);
  block8 = new Block(700,360,50,50);
  block9 = new Block(700,320,50,50);
  block10 = new Block(700,280,50,50);
  block11 = new Block(700,240,50,50);

  block12 = new Block(800,400,50,50);
  block13 = new Block(800,360,50,50);
  block14 = new Block(800,320,50,50);
  block15 = new Block(800,280,50,50);
  block16 = new Block(800,240,50,50);
  block17 = new Block(800,240,50,50);
  block18 = new Block(800,240,50,50);

  block19 = new Block(500,360,50,50);
  block20 = new Block(500,320,50,50);
  block21 = new Block(500,280,50,50);
  block22 = new Block(500,240,50,50);

  hero = new Hero(200,300,300,125);
  fly = new Fly({x:200, y:50},hero.body);
  monster = new Monster(1000,400,200,250);

}

function draw() {
  background(bg);
  Engine.update(engine);

  ground.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();

  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display()

  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  block17.display()
  block18.display()

  block19.display()
  block20.display()
  block21.display()
  block22.display()

  hero.display()
  fly.display();
  monster.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX, y:mouseY})
}
