import GraphNode from "../common/GraphNode";
import cloneGraph from "../CloneGraph";

describe('Clone a Graph', () => {
    test('Should clone a graph', ()=>{
        const graphNode = new GraphNode(1, []);

        const clonedGraphNode = cloneGraph(graphNode);

        expect(graphNode).not.toBe(clonedGraphNode);

    })
})