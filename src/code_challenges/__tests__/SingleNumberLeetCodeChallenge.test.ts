/*
https://leetcode.com/problems/missing-number/
 */
import singleNumber from "../SingleNumber";
describe('Find the missing number', ()=>{
    test('should return 2', ()=>{
          expect(singleNumber([2,1,1])).toBe(2);
    })
})