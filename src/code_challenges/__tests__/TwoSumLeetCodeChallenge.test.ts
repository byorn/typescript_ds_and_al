/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
 */
import twoSum from "../TwoSum";
describe('Return two indexes that meet the Sum', () => {
    test('Should return 0 and 1 for given array', () => {
        const givenArray: number[] = [2,7,11,15];
        const targetSum: number = 9;
        const expectedResult: number[] = [1,0];
        expect(twoSum(givenArray, targetSum)).toStrictEqual(expectedResult);
    });

    test('Should return 0 and 2 for given array', () => {
        const givenArray: number[] =  [-3,4,3,90];
        const targetSum: number = 0;
        const expectedResult: number[] = [2,0];
        expect(twoSum(givenArray, targetSum)).toStrictEqual(expectedResult);
    });


});