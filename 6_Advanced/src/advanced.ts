// インターセクション型
type Engineer = {
  name: string;
  role: string;
}
type Blogger = {
  name: string;
  follower: number;
}
type EngineerBlogger = Engineer & Blogger;

const quill: EngineerBlogger = {
  name: "Quill",
  role: "Frontend Engineer",
  follower: 1000,
}

// interfaceでも同様のことが可能
interface Engineer2 {
  name: string;
  role: string;
}
interface Blogger2 {
  name: string;
  follower: number;
}
interface EngineerBlogger2 extends Engineer2,Blogger2{}

const uil: EngineerBlogger2 = {
  name: "Quill",
  role: "Frontend Engineer",
  follower: 1000,
}

// 3つのtype guard
// 1: typeof
function toUpperCase(x: string): string; // オーバーロード
function toUpperCase(x: number): number;
function toUpperCase(x: string | number) {
  if (typeof x === "string") {
    return x.toUpperCase();
  }
  return x;
}

const upperHello = toUpperCase; // これもオーバーロード

// 関数型のインターセクションはオーバーロードになる
interface FuncA {
  (a: number, b: string): number;
  (a: string, b: number): number;
}
interface FuncB {
  (a: string): number;
}
let intersectionFunc: FuncA & FuncB
intersectionFunc = function (a: number | string, b?: string | number){return 0};
// 2: in
type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker) {
  console.log(nomadWorker.name);
  if ("role" in nomadWorker) {
    console.log(nomadWorker.role);
  }
  if ("follower" in nomadWorker) {
    console.log(nomadWorker.follower);
  }
}

// 3: instanceof
class Dog {
  kind: "dog" = "dog";
  speak() {
    console.log("Bow-wow");
  }
}

class Bird {
  kind: "bird" = "bird";
  speak() {
    console.log("tweeetttt");
  }
  fly() {
    console.log("Flying");
  }
}
type Pet = Dog | Bird;
function havePet(pet: Pet) {
  pet.speak();
  // タグ付きユニオン
  switch (pet.kind) {
    case "dog":
      pet.speak();
      break;
    case "bird":
      pet.speak();
      pet.fly();
      break;
  }
  if (pet instanceof Bird) {
    pet.fly();
  }
}

// 型アサーション 例：HTMLの要素を取得する際など
const input = document.getElementById("input") as HTMLInputElement;// リアクトとかを使う場合は紛らわしいのでasを使った方がいいかも
const input2 = <HTMLInputElement>document.getElementById("input2");
input.value = "Hello";

// インデックスシグネチャについて
interface Designer {
  name: string;
  [index: string]: string; // これがインデックスシグネチャ
}
const designer: Designer = {
  name: "Quill",
}
designer.name.toUpperCase();
designer.bar // あたかもあるように振る舞うことができる

// Optional Chaining
interface DownloadedData {
  id: number;
  user?: {
    name?: {
      first: string;
      last: string;
    }
  }
}
const downloadedData: DownloadedData = {
  id: 1,
}
console.log(downloadedData.user?.name?.first);// ?をつけることでエラーを回避できる

// Nullish Coalescing
const userData = downloadedData.user ?? "no-user"; // nullかundefinedの場合は"no-user"を返す

// レストパラメータについて
// function advancedFn (...args: number[]){ 書き方1
function advancedFn (...args: readonly [age: number, name: string, hasPets?: boolean, ...score: number[]]){ // 書き方2 タプル + レストパラメータもできる(Labeled Tuple)

}
advancedFn(1, 'hi', true);

// as const
let milk = "milk" as const; // 型は"milk"になる
const array = [10, 20] as const; // 型はreadonly [10, 20]になる
const peter = {
  name: "Peter",
  age: 38,
} as const; // 型は{name: "Peter", age: 38}になる

// typeofの応用
type PeterType = typeof peter; // {name: "Peter", age: 38}という型になる

// Symbolについて
const symbol1 = Symbol();
const symbol2 = Symbol();
console.log(symbol1 === symbol2); // false
function myFunc(symbol: symbol) {} //シンボルを型として扱える
function myFunc1(symbol:typeof symbol1) {} //特定のシンボルを型として扱える


export {}; // 独立したものと扱うために一時的に追加
