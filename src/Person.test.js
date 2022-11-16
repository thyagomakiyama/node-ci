const Person = require('./Person')

describe('create Person', () => {
    const person = new Person('Thyago', 27)
    test('say hello', () => {
        expect(person.sayHello()).toBe('Opa! My name is Thyago. I am 27 years old.')
    })
    test('say good bye', () => {
        expect(person.sayGoodBye()).toBe('Good By my friend.')
    })
    test("get attributes", () => {
        expect(person.getName()).toBe('Thyago')
        expect(person.getAge()).toBe(27)
    })
})
