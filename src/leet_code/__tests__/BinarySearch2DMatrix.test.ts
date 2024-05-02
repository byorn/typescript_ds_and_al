/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
 */
import searchMatrix from "../BSTSearch2DMatrix";
describe('Search 2D Matrix', () => {
    test('Should return 0 and 1 for given array', () => {
        const givenArray: number[][] = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
        const targetSum: number = 12;
        const expectedResult: boolean = true;
        expect(searchMatrix(givenArray, targetSum)).toStrictEqual(expectedResult);
    });

});