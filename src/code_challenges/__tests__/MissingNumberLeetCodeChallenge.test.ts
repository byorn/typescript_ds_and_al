/*
https://leetcode.com/problems/missing-number/
 */
import missingNumber from "../MissingNumber";
describe('Find the missing number', ()=>{
    test('should return 2', ()=>{
          expect(missingNumber([0,1,3])).toBe(2);
    })
})