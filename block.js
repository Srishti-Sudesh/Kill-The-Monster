class Block{
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
			restitution : 0,
            friction : 1,
            density : 1.2
        }

    this.body = Bodies.rectangle(x,y,width,height,options)    
    World.add(world,this.body);
    }

    display(){
		push();
		translate(this.body.position.x, this.body.position.y);
		rotate(this.body.angle);
		rectMode(CENTER);
        fill("red");
        strokeWeight(2);
		rect(0,0,50,50);
		pop();
    }
}