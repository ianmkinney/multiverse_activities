/**
 * Represents a bag.
 * @constructor
 * @param {number} weight - The weight of the bag
 */
class Bag {
    constructor(weight) {
        /** Throws error if no weight is provided. */
        if(!weight){
            throw new Error('bag needs weight')
        } 
        this.weight = weight
    }
}

module.exports = Bag