class Ground {
    constructor() {
      var ground_options = {
          isStatic: true
      }
      this.ground = Bodies.rectangle(450,390,900,20,ground_options);

      World.add(world, this.body);
    }
    display(){
      rectMode(CENTER);
      fill("brown");
      rect(this.ground.position.x, this.ground.position.y, this.width, this.height);
    }
  }
 