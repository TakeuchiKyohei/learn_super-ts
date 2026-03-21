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
  constructor(name: string, age: number, private _subject: string) {
    super(name, age);
  }
  explainJob(): void {
    console.log(`I teach ${this._subject}.`);
  }
}

const teacher = new Teacher("Taro", 30, "Science");
teacher.greet();
