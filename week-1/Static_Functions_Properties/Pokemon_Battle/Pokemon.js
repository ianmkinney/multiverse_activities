class Pokemon {

    static pokemons = [];

    constructor(name, number, type, hp) {
        this.name = name;
        this.number = number;
        this.type = type;
        this.hp = hp;
    }
    static checkName(name) {
        return(typeof name === 'string')
    }
    static checkNumber(number) {
        return(typeof number === 'number')
    }
    static checkType(type) {
        types = ['Fire', 'Grasss', 'Water', 'Electric', 'Rock', 'Ghost', 'Ice']
        return(types.includes(type))
    }
    static checkHp(hp) {
        return(hp >= 50 && hb <= 250 ? true : false)
    }
    update() {
        console.log(`${this.name} is at ${this.hp} hp`)
    }
    tackle(Pokemon) {
        console.log(`${this.name} used tackle!`)
        let hitOrMiss = Math.floor(Math.random() * 2);
        if(hitOrMiss == 0) {
            Pokemon.hp = Pokemon.hp - 10;
            console.log(`${this.name} dealt 10 damage to ${Pokemon.name}`)
        } else {
            console.log("The attack missed!")
        }
    }
    harden() {
        let healOrMiss = Math.floor(Math.random() * 2);
        console.log(`${this.name} used Harden!`)
        if(healOrMiss == 0) {
            Pokemon.hp = Pokemon.hp - 10;
            console.log(`${this.name} healed for 10 hp!`)
        } else {
            console.log("Healing failed!")
        }
    }
    chooseMove() {
        
    }
}

module.exports = Pokemon

class Charmander extends Pokemon {
    constructor(name, number, type, hp) {
        super(name,number,type,hp)
        this.moves = ['tackle', 'harden', 'special']
    }
    special(Pokemon) {
        setTimeout(() => {
            console.log(`${this.name} used Ember!`)
            let damage = Math.floor(Math.random * 20)
            if(damage > 15) {
                console.log(`Critical Hit! ${Pokemon.name} took ${damage} damage!`)
            } else {
                console.log(`${Pokemon.name} took ${damage} damage!`)
            }
            Pokemon.hp = Pokemon.hp - damage;
        }, 5000)
    }
}

module.exports = Charmander

class Squirtle extends Pokemon {
    constructor(name, number, type, hp) {
        super(name,number,type,hp)
        this.moves = ['tackle', 'harden', 'special']
    }
    special(Pokemon) {
        setTimeout(() => {
            console.log(`${this.name} used Bubble!`)
            let damage = Math.floor(Math.random * 20)
            if(damage >= 15) {
                console.log(`Critical Hit! ${Pokemon.name} took ${damage} damage!`)
            } else {
                console.log(`${Pokemon.name} took ${damage} damage!`)
            }
            Pokemon.hp = Pokemon.hp - damage;
        }, 5000)
    }
}

module.exports = Squirtle


