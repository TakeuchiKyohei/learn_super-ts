class Person {
  constructor(public readonly name: string, protected age: number) {
  }
  incrementAge() {
    this.age++;
  }
  greet(this: Person) { // thisの型を指定
        console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}

class Teacher extends Person {
  constructor(name: string, age: number, public subject: string[]) {
    super(name, age);
  }
  greet() { // thisの型を指定
        console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
        console.log(`I teach ${this.subject.join(", ")}.`);
    }
}

const teacher = new Teacher("Taro", 30, ["Math", "Science"]);
teacher.greet();
