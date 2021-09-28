const Airport = require('./Airport')
const Plane = require('./Plane')
const Bag = require('./Bag')
const Passenger = require('./Passenger')

/**
 * Suite for testing the Airport class
 */
describe('Airport object', () => {

	/** Test to check the airport name is a string. */
	test('airport has a name', () => {
		const testAirport = new Airport('JFK')
		expect(typeof testAirport.name).toBe('string')
	})

	/** Test to check for planes array within airport object. */
	test('airport has planes', () => {
		const testAirport = new Airport('JFK')
		expect(Array.isArray(testAirport['planes'])).toBe(true)
	})

	/** Test to check functionality of addPlanes function */
	test('airport can add planes', () => {
		const testAirport = new Airport('JFK')
		const testPlane = new Plane('C-37')
		testAirport.addPlane(testPlane)
		expect(testAirport['planes'].length).toBe(1)
	})

	/** Test to check that bag weight can be traversed to from airplane class */
	test('airport can have planes with passengers with bags', () => {
		let weight = 15
		const testBag = new Bag(weight)
		const testPassenger = new Passenger('Tom', 111, 1)
		testPassenger.addBag(testBag)
		const testPlane = new Plane('C-37')
		testPlane.addPassenger(testPassenger)
		const testAirport = new Airport('JFK')
		testAirport.addPlane(testPlane)
		expect(testAirport.planes[0].passengers[0].bags[0].weight).toBe(weight)
	})
})