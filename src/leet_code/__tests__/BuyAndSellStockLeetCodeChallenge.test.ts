import buyAndSellStock from "../BuyAndSellStock";

describe('Buy and sell stock', () => {
    test('Should return the maximum profit', ()=>{
            const max = buyAndSellStock([1,2,3,4,5]);
            expect(max).toEqual(4);

    })
})