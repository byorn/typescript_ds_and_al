// for a given file, spearated by a line space. find the largest amount
import { readFile } from '../common/FileReader';
import {getElfThatCarriesMaxiumCalories} from "../AdventOfCodePuzzle1";

describe('Elf who carries most of the calories', ()=>{

    test('Should return an array of records in a file', async () => {

        const lines:string[] = await readFile(`${__dirname}/resources/AdventOfCodePuzzle1.txt`);
        expect(lines.length).toBeGreaterThan(0);

    });

    test('Should get number who has maximum', async () => {

        const lines:string[] = ['1','1','','1','1','1','','1','1']
        const elfNumber: number = getElfThatCarriesMaxiumCalories(lines);
        expect(elfNumber).toEqual(3);
    });

    test('Should get number who has maximum when first', async () => {

        const lines:string[] = ['1','4','','1','1','1','','1','1','1','1']
        const elfNumber: number = getElfThatCarriesMaxiumCalories(lines);
        expect(elfNumber).toEqual(5);
    });

    test('Should get number who has maximum when last', async () => {

        const lines:string[] = ['1','1','1','1','','1','1','','1','1','9']
        const elfNumber: number = getElfThatCarriesMaxiumCalories(lines);
        expect(elfNumber).toEqual(11);
    });

    test('Should print the Elf number who carries the maxium amount of calories', async () => {

        const lines:string[] = await readFile(`${__dirname}/resources/AdventOfCodePuzzle1.txt`);
        const elfNumber: number = getElfThatCarriesMaxiumCalories(lines);
        expect(elfNumber).toEqual(72478);
    });

});