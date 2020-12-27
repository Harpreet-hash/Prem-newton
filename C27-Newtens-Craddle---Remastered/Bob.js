class Bob{
    constructor(x, y, r){
        var properties = {
            
            restitution: 1,
            friction: 1,
            density: 15
        }

        this.r = r;

        this.body = Bodies.circle(x, y, (this.r )/ 2,  properties);

        World.add(world, this.body);

    }

    display(){
        var pos = this.body.position;

        push();

        translate(pos.x, pos.y);
        rotate(this.body.angle)

        //ellipseMode(CENTER);

        fill("#D97AEA");
        ellipse(0, 0, this.r, this.r);  

        pop();

    }
}