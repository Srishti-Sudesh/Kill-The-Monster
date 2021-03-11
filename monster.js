class Monster{
    constructor(x,y,width,height){
        var options = {
            isStatic : false,
            density : 1,
            friction : 1,
        }

        this.image = loadImage("images/Monster-01.png","images/Monster-02.png");
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,200,250);
        pop();
      }
}