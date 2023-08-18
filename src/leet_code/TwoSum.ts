export default function twoSum(nums: number[], target: number): number[] {

    const resultArray: Array<number> = [];
    const visitedNumberIndexMap: Record<number, number> = {};

    nums.forEach((num: number, index: number) => {


        const remainingNumber: number = target - num;
        if (visitedNumberIndexMap[remainingNumber] >= 0) {
            resultArray.push(index);
            resultArray.push(visitedNumberIndexMap[remainingNumber]);
            return resultArray;
        }


        visitedNumberIndexMap[num] = index;


    });
    return resultArray;
};