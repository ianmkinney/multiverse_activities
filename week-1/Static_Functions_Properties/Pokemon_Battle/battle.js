const Pokemon = require('./Pokemon');
const Bulbasaur = require('./Pokemon');
const Charmander = require('./Pokemon');
const Squirtle = require('./Pokemon');

function battle(pokemon1, pokemon2) {
    while(pokemon1.hp > 0 && pokemon2.hp > 0) {    
        pokemon1.tackle(pokemon2)
        pokemon2.update()
        pokemon2.tackle(pokemon1)
        pokemon1.update()
    }
    if(pokemon1.hp <= 0) {
        console.log(`${pokemon2.name} wins!`)
    } else {
        console.log(`${pokemon1.name} wins!`)
    }
}

const bulbasaur = new Bulbasaur('bulbasaur', 1, 'Grass', 100)
const charmander = new Charmander('charmander', 6, 'Fire', 100)

battle(bulbasaur, charmander)