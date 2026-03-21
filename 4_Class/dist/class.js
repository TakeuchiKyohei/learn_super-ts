"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(initName, initAge) {
        this.name = initName;
        this.age = initAge;
    }
    incrementAge() {
        this.age++;
    }
    greet() {
        console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}
const taro = new Person("Taro", 20);
// taro.age = 42 // privateにすることでアクセスできなくなる
taro.greet();
