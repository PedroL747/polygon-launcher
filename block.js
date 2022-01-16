class Block{
    constructor(x, y, width, height) {
        var options = {
                  
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255    
        this.image = loadImage("block.png")
        this.visibility = 255  
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        if(this.body.speed<3){
          push()
        translate(pos.x, pos.y);
      
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
       pop()
         }
       else{
       
          push()
          tint(255,this.visibility) 
          this.visibility = this.visibility-2 
          
        
          image(this.image,this.body.position.x,this.body.position.x,50,50)
          pop()
          World.remove(world,this.body)

        }
      }
}
