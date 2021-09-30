const Pokemon = require('./Pokemon')

class Bulbasaur extends Pokemon {
    constructor(name, number, type, hp) {
        super(name,number,type,hp)
        this.moves = ['tackle', 'harden', 'special']
    }
    vineSlap(Pokemon) {
        setTimeout(() => {
            console.log(`${this.name} used Vine Slap!`)
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

module.exports = Bulbasaur