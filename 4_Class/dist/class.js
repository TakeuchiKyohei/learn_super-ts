"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    incrementAge() {
        this.age++;
    }
    greet() {
        console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
        this.explainJob();
    }
}
Person.species = "Homo sapiens";
class Teacher extends Person {
    get subjects() {
        if (!this._subject) {
            throw new Error("Subject is not defined.");
        }
        return this._subject;
    }
    set subjects(value) {
        if (!value) {
            throw new Error("Subject cannot be empty.");
        }
        this._subject = value;
    }
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    explainJob() {
        console.log(`I teach ${this._subject}.`);
    }
    static getInstance(name, age, subject) {
        if (!Teacher.instance) {
            this.instance = new Teacher(name, age, subject);
        }
        return this.instance;
    }
}
const teacher = Teacher.getInstance("Taro", 30, "Science");
const teacher2 = Teacher.getInstance("Taro", 31, "Science");
teacher.greet();
teacher2.greet();
