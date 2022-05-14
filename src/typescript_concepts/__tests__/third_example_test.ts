import { Vehicle, printVehicle }  from '../third_example'

describe('testing round 3', ()=>{

 
    test('How we pass an object as interfact typed Object', () => {

      const newVehicleDate:Vehicle = {name:'Datsun',kms:1232,manufacturedDate:new Date(), broken:false}

       expect(printVehicle(newVehicleDate)).toBeUndefined();
    });



});