class polisi{
    constructor(x,y,width,height,angle){
        var options = {
            'restitution': 0.1,
            'friction':1.0,
            'density':1.0,
        }
        this.body = Bodies.circle(x,y,angle,width,height,options)
        this.x=x
        this.y=y

        this.image = loadImage("polygon.png")
        World.add(world,this.body)
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,40,40);
        pop();
    }

}