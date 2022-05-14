import { EnergySource, Petrol } from "../4_classes";

describe ('test inheritance', () =>{

    test('test inheritance', ()=>{

        const petrol = new Petrol("Liquid Petrol");
        petrol.produceEnergy();
        petrol.childCanOverride();

    })

})