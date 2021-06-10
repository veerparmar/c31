/* variables are used to store data.
types of data stored
*/


var str = "This is string";
console.log(str);

var num = 12
console.log(num);

var bool = true;
console.log(bool);

var obj;
console.log(obj);

obj = null;
console.log(obj);

// data structure : array - hold multiple values
var arr1 = []; // empty array - same / different type of data , each value seperated by value.
console.log(arr1);

var arr2 = [1,2000,3,450,5000];
console.log(arr2);


/* 
0: "hello" // first element
1: 1       // second element
2: "This is string" // third element
3: false // fourth element
4: 4.69
length: 5
*/
var arr3 = ["hello",1,str,false,4.69];
console.log(arr3);
console.log(arr3[0]);
console.log(arr3[3]);

var arr4 = [[1,2],[2,3],[3,4],[4,5]]
console.log(arr4[0][0]);   // arr4[mainIndex][sub-index]
console.log(arr4[0][1]);

arr4.push(num)
console.log(arr4);
arr4.push("inserting values");
console.log(arr4);

//last in first out
arr4.pop();


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var gameState = "onsling"

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}





function mouseDragged(){
    if(gameState !== "launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
   
}


function mouseReleased(){
    
    slingshot.fly();
    gameState = "launched"
}

function keyPressed(){
    if(keyCode === 32){
//        slingshot.attach(bird.body);
    }
}