import findShortestPath from "../Graph/ShortestPath1";

/**
 * given directions ESESSE, go back to the starting position
 * the shortest path without repeating the same edges
 */
describe('find shortest path', ()=>{

    it('should print ', ()=>{
        expect(findShortestPath('SSS')).toEqual('.ENNNW');
    })
})