class Bob{
    constructor(x, y, radius){
        var options = {
            isStatic: true,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        //this.image = loadImage("sprites/paper.png");
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(this.x, this.y, this.radius/1.6, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill(255, 0, 255);
        //image(this.image, 0, 0, this.radius, this.radius);
        //tint(255, 255, 255);
        ellipse(0, 0, this.radius);
        pop();
    }
}