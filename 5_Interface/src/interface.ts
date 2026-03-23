interface Human {
  name: string;
  age: number;
  // greet: (message: string) => void; この書き方もできる
  greet(message: string): void;
}

const human: Human = {
  name: "Taro",
  age: 30,
  greet(message: string): void {
    console.log(`${message}, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

class Developer implements Human {
  constructor(public name: string, public age: number, private language: string) { // implementsしたプロパティはpublicでなければならない
  }
  greet(message: string): void {
    console.log(`${message}, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}
