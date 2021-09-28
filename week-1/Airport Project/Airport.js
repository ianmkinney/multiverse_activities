/**
 * Represents an Airport
 * @constructor
 * @param {string} name - The name of the Airport
 */
class Airport {
	constructor(name) {
		this.name = name;
		this.planes = [];
	}
	/** Function for adding a plane to the airport. */
	addPlane(plane) {
		this.planes.push(plane)
	}
}

module.exports = Airport