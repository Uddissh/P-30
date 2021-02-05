class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.good = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.good);
    }
    display(){
      var pos =this.good.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
};