
import {graphDFS, graphBFS} from "../Graph/Graph";

describe(`Test graph  implementation`, ()=> {

    test('Should traverse a graph DFS', () => {

        const graph = {
            a: ['b', 'c'],
            b: ['f', 'e', 'd'],
            c: ['g'],
            d: ['c'],
            e: ['h'],
            f: [],
            g: [],
            h: []
        }

        console.log(graphDFS(graph, 'a'));



    });

    test('Should traverse a graph BFS', () => {
        const graph = {
            a: ['b', 'c'],
            b: ['f', 'e', 'd'],
            c: ['g'],
            d: ['c'],
            e: ['h'],
            f: [],
            g: [],
            h: []
        }
        console.log(graphBFS(graph, 'a'));
    });



})