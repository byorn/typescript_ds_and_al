const cyclicArray=(A:number[], K:number):Array<number>=>{

    const numberToShift = Math.abs(A.length-K);

    const answer:Array<number> = []; 

    if(numberToShift>=A.length){
        return A;
    }

    for(let i:number=numberToShift;i<A.length;i++){
        answer.push(A[i]);
    }

    for(let j:number=0;j<numberToShift;j++){
        answer.push(A[j]);
    }

    return answer;
}
export default cyclicArray;