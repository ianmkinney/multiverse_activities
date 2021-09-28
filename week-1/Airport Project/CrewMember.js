class CrewMember {
    constructor(name, position, staffNumber) {
        this.name = name;
        this.position = position;
        this. staffNumber = staffNumber;
        this.bags = [];
    }
    addBag(Bag) {
        this.bags.push(Bag);
    }
}

module.exports = CrewMember