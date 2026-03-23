"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const human = {
    name: "Taro",
    age: 30,
    greet(message) {
        console.log(`${message}, I'm ${this.name} and I'm ${this.age} years old.`);
    }
};
