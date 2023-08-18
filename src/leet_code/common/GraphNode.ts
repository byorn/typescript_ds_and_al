/**
 * Definition for Graph Node.  - https://leetcode.com/problems/clone-graph/
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

// note: can use public key word for the properties, but because you need to
    //manage the undefined property values, you created a constructor and assigned the values.

class GraphNode {
    val: number
    neighbors: GraphNode[]
    constructor(val?: number, neighbors?: GraphNode[]) {
        this.val = (val===undefined ? 0 : val)
        this.neighbors = (neighbors===undefined ? [] : neighbors)
    }
}

export default GraphNode;
