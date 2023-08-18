// https://leetcode.com/problems/single-number/
function singleNumber(nums: number[]): number {

    const numberMap:Map<number,number> = new Map<number, number>();
    let i = 0;
    for(const n of nums){
        if(numberMap.get(n) !== 1) {
            numberMap.set(n, 1);
        } else {
            numberMap.set(n, 2);
        }
    }
    let singleNumber = 0;
    numberMap.forEach((value, key) => {
        if(value === 1) {
            singleNumber = key;
        }
    })

    return singleNumber;
};

export default singleNumber;