/*
https://leetcode.com/problems/clone-graph/
 */
import Node from "./common/GraphNode";

export default  function cloneGraph(node: Node | null): Node | null {

    if (!node) {
        return null;
    }
    const newRootNode: Node = new Node(node?.val)
    const clonedMap: Map<Node, Node> = new Map<Node, Node>();
    let queue: Node[] = [node];
    clonedMap.set(node, newRootNode);

    while(queue.length > 0) {
        let vertexNode = queue.shift()!;

        vertexNode.neighbors.forEach((neighbor: Node) => {
            if (!clonedMap.has(neighbor)){
                clonedMap.set(neighbor, new Node(neighbor.val));
                queue.push(neighbor);
            }

            clonedMap.get(vertexNode)!.neighbors.push(clonedMap.get(neighbor)!);

        })

    }
    return clonedMap.get(node)!;

};