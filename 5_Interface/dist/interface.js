"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const human = {
    name: "Taro",
    age: 30,
    greet(message) {
        console.log(`${message}, I'm ${this.name} and I'm ${this.age} years old.`);
    }
};
class Developer {
    constructor(name, age, language) {
        this.name = name;
        this.age = age;
        this.language = language;
    }
    greet(message) {
        console.log(`${message}, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}
const user = new Developer("Hanako", 25, "TypeScript"); // 構造的部分型のおかげでlanguageはなくてもDeveloperはHumanとして扱える
