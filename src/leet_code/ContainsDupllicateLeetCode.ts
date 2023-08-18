function containsDuplicate(nums: number[]): boolean {
    const traversed: Map<number, number> = new Map<number, number>();
    let result:boolean = false;
    nums.forEach((n)=>{
        console.log(n,traversed.has(n));
        if (traversed.has(n)){
            result = true;
        }
        traversed.set(n,n);
    })
    return result;
};

export default containsDuplicate;