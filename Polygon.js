class Polygon{
    constructor(x,y){
        var options={
            friction:3,
            restitution:1
        }
        this.body=Bodies.circle(x,y,40,options)
        World.add(world,this.body)
        this.radius=40;
       this.image=loadImage("polygon.png") 

    }
    display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push()
    translate(pos.x,pos.y)
    rotate(angle);
    imageMode(CENTER)
    image(this.image,0,0,this.radius,this.radius)
     pop()
    }
}