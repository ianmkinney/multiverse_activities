class Plane {
    constructor(name){
        this.name = name;
        this.passengers = [];
    }

    setOrigin(origin) {
        this.origin = origin;
    }

    setDestination(destination) {
        this.destination = destination;
    }

    addPassenger(passenger) {
        this.passengers.push(passenger);
    }
}

module.exports = Plane