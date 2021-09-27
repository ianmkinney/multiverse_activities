class User {
    constructor(username, password, email, age) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.age = age;
        this.favTech = [];
    }

    checkAge() {
        if(this.age >= 18 && this.age < 75) {
            return("Age Acceptable");
        } else if(this.age < 18) {
            return("Too young!");
        } else if(this.age >= 75) {
            return("Too old!");
        }
    }

    // ternary operator
    // (age >= 18 && age < 75) ? true : false;

    addTech(tech) {
        this.favTech.push(tech)
    }

    validateEmail() {
        let domain = this.email.split('@')[1];
        if(domain == 'gmail.com') {
            return true;
        } else {
            return false;
        }
    }
}

// Test
let ikinney = new User("ikinney", "iHatePasswords1", "ikinney51@gmail.com", 23);
ikinney.addTech("sqlite");
ikinney.addTech("iPhone");
console.log(ikinney);
console.log(ikinney.checkAge())
console.log(ikinney.validateEmail())
