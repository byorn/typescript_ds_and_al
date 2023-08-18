/*
Given an integer array nums, return true if any value appears at
least twice in the array, and return false if every element is distinct.
 */
import containsDuplicate from "../ContainsDupllicateLeetCode";

describe('Contains Duplicate', ()=>{

 test('should return true', ()=>{
     const result = containsDuplicate([1,2,1]);
     expect(result).toBe(true);
 })
})