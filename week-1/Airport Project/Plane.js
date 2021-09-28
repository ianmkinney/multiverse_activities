/**
 * Represents a plane.
 * @constructor
 * @param {string} name - The name of the plane
 */
class Plane {
    constructor(name){
        this.name = name;
        this.passengers = [];
    }
    /** Function to set origin of plane */
    setOrigin(origin) {
        this.origin = origin;
    }
    /** Function to set destination of plane */
    setDestination(destination) {
        this.destination = destination;
    }
    /** Function to add passenger to passengers array */
    addPassenger(passenger) {
        this.passengers.push(passenger);
    }
}

module.exports = Plane