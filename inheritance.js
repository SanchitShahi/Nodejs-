class animal
{
    constructor(type){
        this.name=type;
    }
    present(){
        console.log(this.name);
    }
}
class fourLeg extends animal{
    constructor(type,breed){
        super(type);
        this.breed=breed;
    }
    show()
    {
        console.log(" The type of animal is "+ this.name +" of breed "+this.breed);
    }
}
let dog1= new fourLeg("Dog","German Shepherd");
return dog1.show();
