class Roof{
    constructor(x, y){
        var properties = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, 800, 10, properties);

        World.add(world, this.body);
    }

    display(){

        
        push();       

        rectMode(CENTER);
        
        fill("black");
        rect(this.body.position.x,this.body.position.y, 400, 30);

        pop();
    }
}