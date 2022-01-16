class slimg  {
    constructor(bodya,pointb){
        var options = {
            bodyA:bodya,
            pointB:pointb,
            stiffness:0.04,
            length:10
        }
        this.pointB = pointb
        this.slinge = Constraint.create(options)
        World.add(world, this.slinge)
    }
   lanssa(){
        this.slinge.bodyA = null
    }
    volta(body){
        this.slinge.bodyA = body
    }
    display(){
        if(this.slinge.bodyA){
            var pointA = this.slinge.bodyA.position
            var pointB = this.pointB
            push()
            strokeWeight(5)
            line(pointA.x,pointA.y-10,pointB.x,pointB.y)
            pop()
            
        }
    }
}