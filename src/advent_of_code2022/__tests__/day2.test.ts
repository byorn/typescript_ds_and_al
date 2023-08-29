// for a given file, spearated by a line space. find the largest amount
import { readFile } from '../common/FileReader';
import {getTotalScore, getTotalScorePart2} from "../day2";


describe('day2 - get total score', ()=>{



    test('Should get total score part1', async () => {
        const lines:string[] = await readFile(`${__dirname}/resources/day2.txt`);
        const totalScore = getTotalScore(lines);
        expect(totalScore).toEqual(8392);
    });

    test('Should get total score part2', async () => {
        const lines:string[] = await readFile(`${__dirname}/resources/day2.txt`);
        const totalScore = getTotalScorePart2(lines);
        expect(totalScore).toEqual(10116);

    });



});