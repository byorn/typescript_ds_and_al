import WordSearch from '../WordSearch';

describe('test', ()=>{
    test('should return the correct value', ()=>{
        const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]

        expect(WordSearch(board, 'SEE')).toEqual(true);
    })
    test('should return the correct value 1', ()=>{
        const board = [["a"]];
        expect(WordSearch(board, "a")).toEqual(true);
    })

})