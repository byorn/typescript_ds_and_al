//https://leetcode.com/problems/search-a-2d-matrix/?envType=study-plan-v2&envId=top-interview-150


/*
@to be revisted and implemented.
 */
export default function searchMatrix(matrix: number[][], target: number): boolean {
    let start:number = 0;
    let rows = matrix.length;
    let cols = matrix[0].length;
    let end:number = rows * cols - 1;

    while (start <= end) {
        let middleIndex = Math.floor (start + end / 2);
        let midRowIndex: number = Math.floor(middleIndex / cols);
        let midColIndex: number = middleIndex % cols;
        console.log('matrix[midRowIndex][midColIndex]', matrix[1][1]);
        console.log('matrix[midRowIndex][midColIndex]', midRowIndex, midColIndex);

        if (target === matrix[midRowIndex][midColIndex]) {
             return true;
        }
        else if (target > matrix[midRowIndex][midColIndex]){
            start = middleIndex + 1;
        } else {
            end = middleIndex - 1;
        }
    }

    return false;
};