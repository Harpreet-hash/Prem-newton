class Rope{
    constructor(body1, body2, offsetX, offsetY){

        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var properties = {
            bodyA: body1,
            pointB: {x:body2.position.x+offsetX,y:body2.position.y+offsetY},
            stiffness:1,
            length:300
        }

        this.rope = Constraint.create(properties); 

        this.bodyA = body1;
        this.bodyB = body2;

        World.add(world, this.rope);
    }

    display(){

        strokeWeight(5);
        line(this.bodyA.position.x, this.bodyA.position.y, this.rope.pointB.x,this.rope.pointB.y);
    }

}