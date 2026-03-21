class Person {
  name: string;
  constructor(initName: string) {
    this.name = initName;
  }
  greet(this: { name: string }) { // thisの型を指定
        console.log(`Hello, I'm ${this.name}.`);
    }
}

const taro = new Person("Taro");
taro.greet();

const anotherTaro = {
  name: "Taro",
  anotherGreet: taro.greet
}
anotherTaro.anotherGreet();
