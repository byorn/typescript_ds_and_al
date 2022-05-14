export class EnergySource {
    constructor(public name:string, public expiryDate: Date, public isNatural:boolean){

    }
    public produceEnergy(){
        console.log(`${this.name} is producing lots of energy`);
    }

    private childCanNotOverride(){
        console.log('try and override me or call me from child');
    }

    protected childCanOverride(){
        console.log("override me");
    }
}

export class Petrol extends EnergySource{
    constructor(private naturalForm:string){
        super("petrol",new Date(),true);
    }

    public produceEnergy(): void {
        console.log(`${this.name} is producing energy and its natural form description is ${this.naturalForm}`);
        this.childCanOverride();
    }

    public childCanOverride(): void {
        console.log(`${this.name} is overrideing parent method`); 
        ///this.childCanNotOverride();  --> fails
    }

    /** will not allow
    public childCanNotOverride() :void{
        console.log('works');
    }
    */

    

 }

