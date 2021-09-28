const Bag = require('./Bag')
const CrewMember = require('./CrewMember')

/** Testing suite for the Crew Member Class */
describe('Crew Member class', () => {

    /** Test to check that the name value is a string */
    test('Crew Member has name', () => {
        const testMember = new CrewMember('Tom', 'Captain', 1);
        expect(typeof testMember.name).toBe('string')
    })

    /** Test to check that the Crew member has bags array */
    test('Crew Member has bags', () =>{

        const testMember = new CrewMember('Tom', 'Captain', 1);
        expect(Array.isArray(testMember['bags'])).toBe(true)

    })

    /** Test to check functionality of addBags function */
    test('Crew Member can add bags', () =>{

        const testMember = new CrewMember('Tom', 'Captain', 1);
        const testBag = new Bag(15)
        testMember.addBag(testBag)
        expect(testMember.bags.length).toBe(1)

    })

    /** Test to check if position value is a string */
    test('Crew Member has position', () => {
        const testMember = new CrewMember('Tom', 'Captain', 1);
        expect(typeof testMember.position).toBe('string')
    })

    /** Test to check if staffNumber value is a number */
    test('Crew Member has staff number', () => {
        const testMember = new CrewMember('Tom', 'Captain', 1);
        expect(typeof testMember.staffNumber).toBe('number')
    })
})