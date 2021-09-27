class Person {
    constructor(name) {
        this.name = name
        this.parents = []
    }

    childOf() {
        //what if the person doesn't know their parent? Add a conditional statement
        if(this.parents.length == 1){
            // return a string that includes both parents
            return(this.name + "'s Parent is " + this.parents[0].name);

        } else if (this.parents.length == 2) {

            return(this.name + "'s Parents are " +this.parents[0].name + " and " + this.parents[1].name);

        }
        else{
            return(this.name + "'s Parents are unknown");
        }
    }

    addParent(parent) {
        //think about the datatype of the parents property and then apply a method to it
        this.parents.push(parent);
    }
}

// First Generation
let KG6 = new Person('King George VI');
let Queen_Elizabeth = new Person('Queen Elizabeth');

// Second Generation
let Prince_Philip = new Person('Prince Philip');
let QE2 = new Person("Queen Elizabeth II");
let Princess_Margaret = new Person("Princess Margaret");
QE2.addParent(KG6);
QE2.addParent(Queen_Elizabeth);
Princess_Margaret.addParent(KG6);
Princess_Margaret.addParent(Queen_Elizabeth);
let second_gen = [Prince_Philip, QE2, Princess_Margaret]

// Third Generation
let Charles = new Person('Charles');
let Anne = new Person('Anne');
let Prince_Andrew = new Person('Prince Andrew');
let Prince_Edward = new Person('Prince Edward');
third_gen_kids = [Charles, Anne, Prince_Andrew, Prince_Edward];
for(let i = 0; i < third_gen_kids.length; i++) {
    third_gen_kids[i].addParent(Prince_Philip);
    third_gen_kids[i].addParent(QE2);
}
let Camila = new Person('Camila');
let Diana = new Person('Diana');
let third_gen = [Charles, Anne, Prince_Andrew, Prince_Edward, Camila, Diana]

function displayTree() {
    for(let i = 0; i < third_gen.length; i++) {
        console.log(third_gen[i].childOf())
    }
    for(let i = 0; i < second_gen.length; i++) {
        console.log(second_gen[i].childOf())
    }
}

displayTree()