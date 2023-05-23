// https://leetcode.com/problems/missing-number/
function missingNumber(nums: number[]): number {


    let numbers:number[] = [];
    let i = 0;
    for(i = 1; i <= nums.length; i++) {
        numbers[i] = i;
    }

    for (const n of nums){
        if ( n !== 0) {
            numbers[n] = 0;
        }
    }

    return numbers.filter((n)=> n!==0)[0] || 0;
}

export default missingNumber;