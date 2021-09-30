class Pet {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    static checkType(type) {
        const types = ['Dog', 'Cat', 'Fish', 'Bird']
        if(types.includes(type)) {
            return true;
        } else {
            return false;
        }
    }

    static checkName(name) {
        const prefix = ['King', 'Queen']
        let pre = ''
        if(name.includes('-'))
            pre = name.split('-')
        else if(name.includes(' '))
            pre = name.split(' ')
        if(prefix.includes(pre)) {
            return true
        } else {
            return false
        }
    }

}

const newPet = new Pet('King Lenny', 'Fish')

console.log(Pet.checkType('Fish'))
console.log(Pet.checkName('King Lenny'))