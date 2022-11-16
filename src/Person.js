class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    sayHallo() {
        return 'Opa! My name is ' + this.name + '. I am ' + this.age + ' years old.'
    }

    sayGoodBye() {
        return 'Good By my friend.'
    }
}

module.exports = Person