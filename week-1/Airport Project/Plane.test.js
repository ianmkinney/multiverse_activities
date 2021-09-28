const Passenger = require('./Passenger')
const Plane = require('./Plane')

/**
 * Test suite for Plane class
 */
describe('Plane class', () => {
    const passenger = new Passenger('Bobby')
    const newPlane = new Plane('Delta')

    /** Test that name of plane is a string */
    test('Plane has name', () => {
        expect(newPlane.name).toBe('Delta')
    })

    /** Test that plane can have an origin and destination set */
    test('Plane has origin and destination', () => {
        newPlane.setOrigin('Cairo')
        newPlane.setDestination('Halifax')

        expect(newPlane.origin).toBe('Cairo')
        expect(newPlane.destination).toBe('Halifax')
    })

    /** Test to check if plane can add passengers to array */
    test('Plane can add passengers', () => {
        newPlane.addPassenger(passenger)
        expect(newPlane.passengers.length).toBe(1)
    })
})