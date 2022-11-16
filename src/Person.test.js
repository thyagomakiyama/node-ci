const Person = require('./Person')

describe('create Person', () => {
    const person = new Person('Thyago', 27)
    test('say hallo', () => {
        expect(person.sayHallo()).toBe('Opa! My name is Thyago. I am 27 years old.')
    })
})
