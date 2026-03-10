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

enum CoffeeSize { //選択肢のオブジェクトを作るイメージ
	SHORT = 'SHORT',
	TALL = 'TALL',
	GRANDE = 'GRANDE',
	VENTI = 'VENTI'
}

const coffee = {
	hot: true,
	size: CoffeeSize.TALL // 上の列挙型のおかげで選択肢の中の値を使える
}

let anything: any = true; // どんな型でも入れられる
let anything2: [any] = [1]; // どんな型でも入れられる
let banana: string = 'banana'
banana = anything // anyが絡むとなんでも入る

let unionType: number | string = 10; // 2種類以上の型を扱いたい時
unionType.toString // numが入っている時はnumのメソッドが
unionType = 'hello';
unionType.toUpperCase // strが入っている時はstrのメソッドが
let unionType2: (number | string)[] = [1, 'hello']

type ClothSize = 's' | 'm' | 'l' 
const apple: 'apple' = 'apple'
const apple2 = 'apple' // constで描き始めたら定義を省略できる
let clothSize: ClothSize = 'l' //literal + unionでenumのような制限をかけることができる
