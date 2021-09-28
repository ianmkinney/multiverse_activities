const Bag = require('./Bag')
const Passenger = require('./Passenger')

/** Testing suite for Passenger class. */
describe('Passenger class', () => {

    /** Test to check that passenger name is a string. */
    test('Passenger has name', () => {
        const testPassenger = new Passenger('Tom', 111, 1);
        expect(typeof testPassenger.name).toBe('string')
    })

    /** Test to check if Passenger has bags array */
    test('Passenger has bag', () =>{

        const testPassenger = new Passenger('Tom', 111, 1);
        expect(Array.isArray(testPassenger['bags'])).toBe(true)

    })

    /** Test to check functionality of addBags function */
    test('Passenger can add bags', () =>{

        const testPassenger = new Passenger('Tom', 111, 1);
        const testBag = new Bag(15)
        testPassenger.addBag(testBag)
        expect(testPassenger.bags.length).toBe(1)

    })
})