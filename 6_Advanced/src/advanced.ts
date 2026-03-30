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

export {}; // 独立したものと扱うために一時的に追加
