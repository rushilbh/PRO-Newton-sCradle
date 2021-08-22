
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	var options={
		isStatic:false,
		restitution:1,
		friction:0,
		density:0.8
		}
	//Create the Bodies Here.
	body1 = Bodies.circle(200,300,20,options)
	World.add(world,body1);
	body2= Bodies.circle(240,300,20,options);
	World.add(world,body2)
	body3 = Bodies.circle(280,300,20,options)
	World.add(world,body3)
	body4 = Bodies.circle(320,300,20,options)
	World.add(world,body4)
	body5= Bodies.circle(360,300,20,options)
	World.add(world,body5)
	
	Sling1 = new SlingShot(body1,{x:200,y:100})
	Sling2 = new SlingShot(body2,{x:240,y:100})
	Sling3 = new SlingShot(body3,{x:280,y:100})
	Sling4 = new SlingShot(body4,{x:320,y:100})
	Sling5 = new SlingShot(body5,{x:360,y:100})

	Engine.run(engine);
  
}


function draw() {

	background(255)
	
	ellipseMode(RADIUS)
	ellipse(body1.position.x,body1.position.y,20,20)
	ellipse(body2.position.x,body2.position.y,20,20)
	ellipse(body3.position.x,body3.position.y,20,20)
	ellipse(body4.position.x,body4.position.y,20,20)
	ellipse(body5.position.x,body5.position.y,20,20)
	Sling1.display()
	Sling2.display()
	Sling3.display()
	Sling4.display()
	Sling5.display()

}

function mouseDragged(){
	Matter.Body.setPosition(body1,{x:mouseX,y:mouseY})
}

