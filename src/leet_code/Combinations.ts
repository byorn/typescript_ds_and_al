//https://leetcode.com/problems/combinations/description/?envType=study-plan-v2&envId=top-interview-150

export default function combine(n: number, k: number): number[][]{

  let result :number[][] = [];


  findResults(1, result, k, n)

  return result;
}

function findResults(start: number, result: number[][], k :number, n: number) {
  if (start == n){
    return;
  }

  let stack:number[] = [];


  for (let i=start; i<=n; i++) {
    if (stack.length < k){
      stack.push(i);
    }
    if (stack.length===k){

      result.push([...stack]);
      stack.pop();
    }
  }

  findResults(start+1, result, k, n);
}


/*
 * 123
 * 124   
 * 125
 *
 * 234
 * 235
 **/
