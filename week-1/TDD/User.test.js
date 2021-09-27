const User = require('./User')

// Write tests in suites -> each suite should test for a certain grouping

describe('User Class Datatypes', () => {

    // username is of type string
    test('username should be of type string', () => {

        // create an instance of the class
        const testUser = new User('test', 'test123', 'test@gmail.com', 23, []); 
        
        expect(typeof testUser.username).toBe('string');

    });

    // password is of type string
    test('password should be of type string', () => {

        const testUser = new User('test', 'test123', 'test@gmail.com', 22, []);

        expect(typeof testUser.password).toBe('string');
    })

    // email is of type string
    test('email should be of type string', () => {

        const testUser = new User('test', 'test123', 'test@gmail.com', 22, []);

        expect(typeof testUser.email).toBe('string');
    })

    // age is an int
    test('age should be of type int', () => {

        const testUser = new User('test', 'test123', 'test@gmail.com', 22, []);

        expect(typeof testUser.age).toBe('number');
    })

    // favoriteTech is an array of Strings
    test('favTech should be an array of Strings', () => {

        const testUser = new User('test', 'test123', 'test@gmail.com', 22, ['test', 'test2']);

        expect(Array.isArray(testUser['favTech'])).toBe(true);
    })
});