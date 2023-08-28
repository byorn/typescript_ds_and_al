// for a given file, spearated by a line space. find the largest amount
import { readFile } from '../common/FileReader';
import {getMaxInGroup} from "../day1";

describe('Elf who carries most of the calories', ()=>{

    test('Should return an array of records in a file', async () => {


        const lines:string[] = await readFile(`${__dirname}/resources/day1.txt`);
        expect(lines.length).toBeGreaterThan(0);

    });

    test('Should get number who has maximum', async () => {

        const lines:string[] = ['1','1','','1','1','1','','1','1']
        const max: number = getMaxInGroup(lines);
        expect(max).toEqual(3);
    });

    test('Should get number who has maximum when first', async () => {

        const lines:string[] = ['1','4','','1','1','1','','1','1','1','1']
        const max: number = getMaxInGroup(lines);
        expect(max).toEqual(5);
    });

    test('Should get number who has maximum when last', async () => {

        const lines:string[] = ['1','1','1','1','','1','1','','1','1','9']
        const max: number = getMaxInGroup(lines);
        expect(max).toEqual(11);
    });

    test('Should print the maxium amount of calories an elf is carrying', async () => {

        const lines:string[] = await readFile(`${__dirname}/resources/day1.txt`);
        const maxCalories: number = getMaxInGroup(lines);
        expect(maxCalories).toEqual(72478);
    });

});