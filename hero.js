class Hero{
    constructor(x,y,r){
        var options = {
            density : 1,
            frictionAir : 1,
        }

        this.image = loadImage("images/hero.png");
        this.body = Bodies.circle(x,y,r/2,options);
        World.add(world,this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,300,150);
        pop();
      }
}