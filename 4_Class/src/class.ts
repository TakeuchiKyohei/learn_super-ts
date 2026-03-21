class Person {
  name: string;
  constructor(initName: string) {
    this.name = initName;
  }
  greet(this: Person) { // thisの型を指定
        console.log(`Hello, I'm ${this.name}.`);
    }
}

const taro = new Person("Taro");
taro.greet();

const anotherTaro = {
  name: "Taro",
  greet: taro.greet
}
anotherTaro.greet();
