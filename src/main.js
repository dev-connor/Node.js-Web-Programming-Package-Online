// Prototype

function Student(name) {
    this.name = name
}

Student.prototype.greet = function greet() {
    return `Hi, ${this.name}!`
}

const me = new Student('Connor')
console.log(me.greet())