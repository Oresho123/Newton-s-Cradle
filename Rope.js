class Rope{
	constructor(body1,bodys,offsetX,offsetY)
	{
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
    }
}