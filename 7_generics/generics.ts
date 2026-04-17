function copy<T extends { name: string }, U extends keyof T>(value: T, key: U): T {
  return value;
}
console.log(copy({name: "Taro", age: 30}, "age"));

class LightDatabase<T extends string | number | boolean> {
  private data: T[] = [];
  add(item: T) {
    this.data.push(item);
  }
  remove(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  get(){
    return this.data;
  }
}
const stringDatabase = new LightDatabase<string>();
stringDatabase.add('Apple');
console.log(stringDatabase.get());
interface TempDataBase<T> {
  id: number;
  data: T[];
}
const tempDatabase: TempDataBase<string> = {
  id: 1,
  data: ['A', 'B', 'C']
};
