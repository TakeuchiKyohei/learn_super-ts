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

const uill: EngineerBlogger = {
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
function toUpperCase(x: string | number) {
  if (typeof x === "string") {
    return x.toUpperCase();
  }
  return "";
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
  speak() {
    console.log("Bow-wow");
  }
}

class Bird {
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
  if (pet instanceof Bird) {
    pet.fly();
  }
}
