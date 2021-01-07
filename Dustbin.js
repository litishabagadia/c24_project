class Dustbin
{
    constructor(x,y,width,height){
        var option={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,option)
        World.add(world,this.body)
     this.width=width
     this.height=height
    }

    display(){
        var pos=this.body.position
        fill ("orange")
        rect(pos.x,pos.y,this.width,this.height)
    }
}