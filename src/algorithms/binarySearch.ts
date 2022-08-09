export const binarySearchIterative = (inputArray:Array<number>, searchNumber:number):number => {
    let start = 0;
    let end = inputArray.length;

    while(start<end){
        let middle: number =  Math.floor(( start + end ) /2);
        if(searchNumber===inputArray[middle]){
            return middle;
        }
        if(searchNumber<inputArray[middle]){
            end = middle;
        }else if (searchNumber>inputArray[middle]){
            start = middle + 1;
        }
    }
    return -1;
}


export const binarySearchRecursive = (inputArray:Array<number>, searchNumber:number):number => {

    return searchRecursive(0, inputArray.length, inputArray, searchNumber);
}

function searchRecursive(start: number, end: number, inputArray: Array<number>, searchNumber: number):number{

    let middle: number =  Math.floor(( start + end ) /2);
    if(searchNumber===inputArray[middle]){
        return middle;
    }
    if(searchNumber<inputArray[middle]){
        end = middle;
    }else if (searchNumber>inputArray[middle]){
        start = middle + 1;
    }
    if(start>=end){
        return -1;
    }
    return searchRecursive(start, end, inputArray, searchNumber);
}