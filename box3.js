class Box3{
    constructor(x,y){
        var options = {
            'isStatic' : false,
            'density' : 1.2,
            'friction' : 0.2,
            'restitution' : 0.1
        }
        this.block = Bodies.rectangle(x,y,30,30,options)
        this.width = 30;
        this.height = 30;
        World.add(world,this.block)

    }
    display(){
        var angle = this.block.angle;
        
        if(this.block.speed < 7){
            push();
            fill(138, 255, 115)
            strokeWeight(1) 
            stroke(0)
            translate(this.block.position.x, this.block.position.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            pop();

        }else{
            World.remove(world,this.block)
        }
    }
}
