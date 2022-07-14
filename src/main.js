// Prototype

function Person(name) {
    this.name = name
}
Person.prototype.greet = function greet() {
    return `Hi, ${this.name}!`
}

function Student(name) {
    this.__proto__.constructor(name)
}

Student.prototype.study = function study() {
    return `${this.name} is studying.`
}

Object.setPrototypeOf(Student.prototype, Person.prototype)

const me = new Student('Connor')
console.log(me.greet())
console.log(me.greet())

const autherPerson = new Person('Foo')
console.log(anotherPerson instanceof Student)
console.log(anotherPerson instanceof Porson)