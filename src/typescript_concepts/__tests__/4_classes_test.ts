import {CheckGetterAndSetter, EnergySource, Petrol} from "../4_classes";

describe ('test inheritance', () =>{

    test('test inheritance', ()=>{

        const petrol = new Petrol("Liquid Petrol");
        petrol.produceEnergy();
        petrol.childCanOverride();

    })

    test('test getters and setters', ()=>{

        const c = new CheckGetterAndSetter(2);
        // console.log(c.name);
        console.log(c.colorOfMyNaME);

        c.printAge();
    })

})