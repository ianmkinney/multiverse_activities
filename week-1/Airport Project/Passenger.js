/**
 * Represents a Passenger
 * @constructor
 * @param {string} - Name of the passenger.
 */
class Passenger {
    constructor(name, bags) {
        this.name = name
        this.bags = []
    }
    /** Function to add bag to bags array */
    addBag(Bag) {
        this.bags.push(Bag)
    }
}

module.exports = Passenger