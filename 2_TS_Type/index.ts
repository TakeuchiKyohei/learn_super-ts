let hasValue: boolean = true;
let count: number = 10;
let word: string = 'hello';

const person = {
  name: {
    first: 'Jack',
    last: 'smith',
  },
  age: 21
}

const fruits = ['apple', 'banana',1] // 型推論
const fruits2: string[] = ['apple', 'banana'] // 型指定
const fruits3: (string|number)[] = ['apple', 'banana'] // 型指定 union型

const book: [string, number, boolean] = ['business', 1500, false] // リストの型をタプルで指定
