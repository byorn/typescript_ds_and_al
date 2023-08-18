// Given an integer x, return true if x is a palindrome
// Example 1:
//
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
import Palindrome from "../Palindrome";
describe('Check If String is a Palindrome', () => {
    test('Should return true, if Palindrome for ODD length', () => {
        const givenVal: string = 'ABA';
        expect(Palindrome(givenVal)).toBeTruthy();
    });
    test('Should return false, if not Palindrome in ODD length', () => {
        const givenVal: string = 'ABB';
        expect(Palindrome(givenVal)).toBeFalsy();
    });
    test('Should return true, if Palindrome in EVEN length', () => {
        const givenVal: string = 'ABBA';
        expect(Palindrome(givenVal)).toBeTruthy();
    });
    test('Should return false, if Palindrome in ODD length', () => {
        const givenVal: string = 'ABBB';
        expect(Palindrome(givenVal)).toBeFalsy();
    });
});