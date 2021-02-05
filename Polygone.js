class Polygon {
    constructor(x,y,radius) {

        var options = {
            isStatic:false,
            restitution:0.8,
            friction:0.8,
            density:0.5
        }

        this.polygon = Bodies.circle(x,y,radius, options);
        this.radius = radius;
        this.image = loadImage("polygon.png");
        World.add(world, this.polygon);

    }

    display() {
        var angle = this.polygon.angle;
        push();
        translate(this.polygon.position.x, this.polygon.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius + 20, this.radius + 20);
        pop();
    }

};