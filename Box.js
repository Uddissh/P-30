class Box {
    constructor(x,y,width,height) {

        var options = {
            restitution:0.4,
            friction:0.5,
            density:0.2
        }

        this.pix = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.visiblity = 255;
        World.add(world, this.pix);
        
    }

    display(){

        if (this.pix.speed < 3) {
            //super.display(); 
          }else {
              World.remove(world, this.pix);
              push();
              this.visiblity = this.visiblity - 5;
              tint(255, this.visiblity);
              image(this.image, this.pix.position.x, this.pix.position.y, 50, 50);
              pop();
          }

        console.log(this.pix.speed)
    
      }

}