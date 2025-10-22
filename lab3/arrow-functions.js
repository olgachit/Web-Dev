function sayHello() {
    return "Hello, world!";
}
//Answer
const sayHello = () => "Hello, world!";

function double(x) {
    return x * 2;
}
//Answer
const double = x => x * 2;

function add(x, y) {
    return x + y;
}
//Answer
const add = (x, y) => x + y;

const person = {
    name: "Alice",
    sayHi: function() {
        return "Hi, " + this.name + "!";
    }
};
//Answer
const personArrow = {
    name: "Alice",
    sayHi: () => "Hi, " + this.name + "!"
};

const numbers = [1, 2, 3, 4, 5];
