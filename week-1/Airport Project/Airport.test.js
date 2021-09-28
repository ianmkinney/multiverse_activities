const Airport = require('./Airport')
const Plane = require('./Plane')
const Bag = require('./Bag')
const Passenger = require('./Passenger')


describe('Airport object', () => {


	
	test('airport has a name', () => {
		const testAirport = new Airport('JFK')
		expect(typeof testAirport.name).toBe('string')
	})

	test('airport has planes', () => {
		const testAirport = new Airport('JFK')
		expect(Array.isArray(testAirport['planes'])).toBe(true)
	})

	test('airport can add planes', () => {
		const testAirport = new Airport('JFK')
		const testPlane = new Plane('C-37')
		testAirport.addPlane(testPlane)
		expect(testAirport['planes'].length).toBe(1)
	})

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