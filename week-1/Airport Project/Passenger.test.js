const Bag = require('./Bag')
const Passenger = require('./Passenger')

describe('Passenger class', () => {


    test('Passenger has name', () => {
        const testPassenger = new Passenger('Tom', 111, 1);
        expect(typeof testPassenger.name).toBe('string')
    })

    test('Passenger has bag', () =>{

        const testPassenger = new Passenger('Tom', 111, 1);
        expect(Array.isArray(testPassenger['bags'])).toBe(true)

    })
})