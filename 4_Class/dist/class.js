"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(initName) {
        this.name = initName;
    }
    greet() {
        console.log(`Hello, I'm ${this.name}.`);
    }
}
const taro = new Person("Taro");
taro.greet();
const anotherTaro = {
    name: "Taro",
    anotherGreet: taro.greet
};
anotherTaro.anotherGreet();
