class Person {
  constructor(public readonly name: string, private age: number) {
  }
  incrementAge() {
    this.age++;
  }
  greet(this: Person) { // thisの型を指定
        console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}

const taro = new Person("Taro", 20);
// taro.age = 42 // privateにすることでアクセスできなくなる
taro.greet();
