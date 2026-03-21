class Person {
  name: string;
  constructor(initName: string) {
    this.name = initName;
  }
}

const taro = new Person("Taro");
console.log(taro);
