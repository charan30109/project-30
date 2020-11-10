class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.slingShot = Constraint.create(options);
        this.pointB=pointB
        World.add(world, this.slingShot);
    }
    attach(body){
        this.slingShot.bodyA = body;
    }
    
    fly(){
        this.slingShot.bodyA = null;
    }

   
    display(){
        //var pos1 = this.slingShot.bodyA.position;
        //var pos2 = this.pointB;
        //strokeWeight(4);
        //line(pos1.x, pos1.y, pos2.x, pos2.y);
    }
    
}