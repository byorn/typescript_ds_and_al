// for a given file, spearated by a line space. find the largest amount
import { readFile } from '../common/FileReader';
import {getTotalPoints, findCommon, getTotal, getTotalPointsPart2} from "../day3";


describe('day3 - get total', ()=>{



    test('Should get total', async () => {
        const lines:string[] = await readFile(`${__dirname}/resources/day3.txt`);
        const totalScore = getTotalPoints(lines);
        expect(totalScore).toEqual(7889);
    });

    test('Should get total part2', async () => {
        const lines:string[] = await readFile(`${__dirname}/resources/day3.txt`);
        const totalScore = getTotalPointsPart2(lines);
        expect(totalScore).toEqual(2825);
    });

    test('should find common chars', async () => {
        const common:string[] = findCommon("Aaabbcc", "FSFDSFA")
        expect(common).toEqual(["A"])

        const common1:string[] = findCommon("aRabbcc", "FRFDSFa")
        expect(common1).toEqual(["a", "R"])
    });

    test('should get total points', async () => {
        const total:number = getTotal(["a", "z"])
        expect(total).toEqual(27)
        const total1:number = getTotal(["A", "z"])
        expect(total1).toEqual(53)
    });





});