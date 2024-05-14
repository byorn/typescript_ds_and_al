//https://leetcode.com/problems/product-of-array-except-self/
export default function productExceptSelf(nums: number[]): number[] {

    const result: number[] = [];
    let product:number = 0;
    for (let i = 0; i < nums.length; i++) {
        product = product * nums[i];
    }

    for (let i = 0; i < nums.length; i++) {

    }

    return result;

}