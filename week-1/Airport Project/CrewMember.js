/**
 * Represents a Crew Member
 * @constructor
 * @param {string} name - The name of the crew member.
 * @param {string} position - The position of the crew member.
 * @param {number} staffNumber = The id number of the crew member.
 */
class CrewMember {
    constructor(name, position, staffNumber) {
        this.name = name;
        this.position = position;
        this. staffNumber = staffNumber;
        this.bags = [];
    }
    /** Function to add bag to crew member's array. */
    addBag(Bag) {
        this.bags.push(Bag);
    }
}

module.exports = CrewMember