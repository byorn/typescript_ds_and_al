/**
 * Graph
 *
 *        f
 *        ⬆
 *  a --> b --> e --> h
 *  ⬇    ⬇
 *  c <-- d
 *  ⬇
 *  g
 *
 *
 *  will be represented as map
 *
 *  {
 *      a: [b, c],
 *      b: [f, e, d],
 *      c: [g],
 *      d: [c],
 *      e: [h],
 *      f: [],
 *      g: []
 *      h: []
 *  }
 *
 *  Depth first search traversal uses a stack
 *
 *  a, b, f, e, h, d, c, g
 *
 *  Breath first search traversal uses a queue
 *
 *
 *
 */

export const graphDFS = (graph:Record<string, Array<string>>, start: string):string => {
    let outputStr = '';

    let stack = [start];
    while (stack.length > 0){
        let poped = stack.pop() as string;
        //traversed
        outputStr+=poped+",";
        let neighbours:string[] = graph[poped];
        neighbours.forEach(n => stack.push(n));

    }

    return outputStr;
}

export const graphBFS = (graph:Record<string, Array<string>>, start: string):string => {
    let outputStr = '';

    let queue = [start];
    while (queue.length > 0){
        // [1,2,3] shift, will remove 1. and will mark as travered as added to outputStr
        let shifted = queue.shift() as string;
        // queue, removed, has been traveresed
        outputStr+=shifted+",";
        let neighbours:string[] = graph[shifted];
        neighbours.forEach(n => queue.push(n));
    }

    return outputStr;
}


