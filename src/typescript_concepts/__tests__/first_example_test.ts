import add  from '../first_example'

describe('testing for the first time', ()=>{

    test('add works', () => {

        expect(add(2,2)).toBe(4);
    });

});