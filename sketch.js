const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, ground;
var stand1, stand2;
var slingShot;
var polygonImg;
//set1
var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12;
var block13, block14, block15
var block16;
//set2
var blockA1, blockA2, blockA3, blockA4, blockA5;
var blockA6, blockA7, blockA8;
var blockA9;

function preload(){
    polygonImg=loadImage("polygon.png");
}

function setup(){
    createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    ground = new Ground();
    stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(700,200,200,10);

    //set 1
    //first level
    block1 = new block1(300,275,30,40);
    block2 = new Block(330,275,30,40);
    block3 = new Block(360,275,30,40);
    block4 = new Block(390,275,30,40);
    block5 = new Block(420,275,30,40);
    block6 = new Block(450,275,30,40);
    block7 = new Block(480,275,30,40);
    //second level
    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);
    //third level
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);
    //top level
    block16 = new Block(390,155,30,40);

    //set2
    //first level
    blockA1 = new Block(640,175,30,40);
    blockA2 = new Block(670,175,30,40);
    blockA3 = new Block(700,175,30,40);
    blockA4 = new Block(730,175,30,40);
    blockA5 = new Block(760,175,30,40);
    //second level
    blockA6 = new Block(670,135,30,40);
    blockA7 = new Block(700,135,30,40);
    blockA8 = new Block(730,135,30,40);
    //top level
    blockA9 = new Block(700,95,30,40);

    ball = Bodies.circle(50,200,20);
    World.add(world,ball);

    slingShot = new Slingshot(this.ball,{x:100,y:200});
}

function draw(){
    background(0);

    textSize(20);
    fill("lightyellow");
    text("Drag the HEXAGONAL STONE and RELEASE it, to launch it towards the block",100,30);

    ground.display();
    stand1.display();
    stand2.display();
//SET1
    strokeWeight(2);
    stroke(15);
    fill("skyblue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    fill("pink");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    fill("turquoise");
    block13.display();
    block14.display();
    block15.display();

    fill("grey");
    block16.display();

//SET2
    fill("skyblue");
    blockA1.display();
    blockA2.display();
    blockA3.display();
    blockA4.display();
    blockA5.display();

    fill("turquoise");
    blockA6.display();
    blockA7.display();
    blockA8.display();

    fill("pink")
    blockA9.display();

    fill("gold");
    imageMode(CENTER);
    image(polygonImg, ball.position.x, ball.position.y, 40, 40);

    slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,Y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}