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

export const graphDFS = (graph:any, start: string):string => {
    let outputStr = '';

    let stack = [start];
    while (stack.length > 0){
        let poped = stack.pop() as string;
        outputStr+=poped+",";
        let neighbours:[] = graph[poped];
        neighbours.forEach(n => stack.push(n));
    }

    return outputStr;
}

export const graphBFS = (graph:any, start: string):string => {
    let outputStr = '';

    let queue = [start];
    while (queue.length > 0){
        let shifted = queue.shift() as string;
        outputStr+=shifted+",";
        let neighbours:[] = graph[shifted];
        neighbours.forEach(n => queue.push(n));
    }

    return outputStr;
}


