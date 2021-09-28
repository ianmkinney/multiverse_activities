const Bag = require('./Bag')

describe('Bag class', () => {
    //bag has weight
    test('bag has weight', () => {
        let weight = 15;
        const testBag = new Bag(weight);
        expect(testBag.weight).toBe(weight)
    })
    //if bag has no weight, return error
    test('bag has no weight to return an error', () => {
        expect(() => {
            const bag = new Bag();
          }).toThrow();
    })
})