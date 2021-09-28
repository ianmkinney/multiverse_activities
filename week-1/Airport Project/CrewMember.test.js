const Bag = require('./Bag')
const CrewMember = require('./CrewMember')

describe('Crew Member class', () => {


    test('Crew Member has name', () => {
        const testMember = new CrewMember('Tom', 'Captain', 1);
        expect(typeof testMember.name).toBe('string')
    })

    test('Crew Member has bag', () =>{

        const testMember = new CrewMember('Tom', 'Captain', 1);
        expect(Array.isArray(testMember['bags'])).toBe(true)

    })

    test('Crew Member has position', () => {
        const testMember = new CrewMember('Tom', 'Captain', 1);
        expect(typeof testMember.position).toBe('string')
    })

    test('Crew Member has staff number', () => {
        const testMember = new CrewMember('Tom', 'Captain', 1);
        expect(typeof testMember.staffNumber).toBe('number')
    })
})