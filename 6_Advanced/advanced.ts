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

const quill2: EngineerBlogger2 = {
  name: "Quill",
  role: "Frontend Engineer",
  follower: 1000,
}
