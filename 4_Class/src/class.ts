class Person {
  name: string;
  private age: number;
  constructor(initName: string, initAge: number) {
    this.name = initName;
    this.age = initAge;
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
