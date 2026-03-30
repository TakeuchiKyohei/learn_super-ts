abstract class Person {
  static species = "Homo sapiens";
  constructor(public readonly name: string, protected age: number) {
  }
  incrementAge() {
    this.age++;
  }
  greet(this: Person) { // thisの型を指定
        console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
        this.explainJob();
    }
  abstract explainJob(): void;
}

class Teacher extends Person {
  private static instance: Teacher;
  get subjects() {
    if (!this._subject) {
      throw new Error("Subject is not defined.");
    }
    return this._subject;
  }
  set subjects(value: string) {
    if (!value) {
      throw new Error("Subject cannot be empty.");
    }
    this._subject = value;
  }
  private constructor(name: string, age: number, private _subject: string) {
    super(name, age);
  }
  explainJob(): void {
    console.log(`I teach ${this._subject}.`);
  }
  static getInstance(name: string, age: number, subject: string) {
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
