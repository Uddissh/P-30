class Box {
    constructor(x,y,width,height) {

        var options = {
            restitution:0.4,
            friction:0.0
        }

        this.pix = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.visiblity = 255;
        World.add(world, this.pix);
        
    }

    display(){

        if (this.pix.speed < 5) {
            //super.display(); 
            var angle  = this.pix.angle;
            push()
        translate(this.pix.position.x, this.pix.position.y);
          rotate(angle);

          rectMode(CENTER);
              rect(0, 0, this.width, this.height);
          pop()
          }else {
              World.remove(world, this.pix);
              push();
              this.visiblity = this.visiblity - 5;
              tint(255, this.visiblity);
              pop();
          }

        console.log(this.pix.speed)
    
      }

}