class Passenger {
    constructor(name, bags) {
        this.name = name
        this.bags = []
    }

    addBag(Bag) {
        this.bags.push(Bag)
    }
}

module.exports = Passenger