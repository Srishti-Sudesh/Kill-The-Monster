class Fly{
    constructor(pointA, bodyB){
    var options = {
        pointA : pointA,
        bodyB : bodyB,
        stiffness : 0.4,
        length : 150
    }
    this.pointA = pointA;
    // this.pointB = pointB;
    this.chain = Matter.Constraint.create(options);
    World.add(world,this.chain);
}

display(){
    var pointA = this.pointA;
    var pointB = this.chain.bodyB.position;
    stroke("white");
    strokeWeight(0);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
}
}