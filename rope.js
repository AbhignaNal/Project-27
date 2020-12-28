class Rope{
    constructor(body1, body2, offsetX, offsetY, pointB){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: {x: this.offsetX, y: this.offsetY}
        }

        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);        
    }
    attach(body){
        this.rope.bodyA = body;
    }
    fly(){
        this.rope.bodyA = null;
    }
    display(){
        if(this.rope.bodyA){
            var pointA = this.rope.body1.position;
            var pointB = this.pointB;

            push();

            stroke(48, 22, 8);
            
            if(pointA.x < 200 || pointA.x > 600){
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
            }
            else {
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
            }

            pop();
        }
    }
}