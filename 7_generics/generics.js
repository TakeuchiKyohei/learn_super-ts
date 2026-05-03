"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function copy(value, key) {
    return value;
}
console.log(copy({ name: "Taro", age: 30 }, "age"));
class LightDatabase {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    remove(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get() {
        return this.data;
    }
}
const stringDatabase = new LightDatabase();
stringDatabase.add('Apple');
console.log(stringDatabase.get());
const tempDatabase = {
    id: 1,
    data: ['A', 'B', 'C']
};
const fetchData = new Promise(resolve => {
    setTimeout(() => {
        resolve("Data fetched");
    }, 1000);
});
fetchData.then(data => {
    data;
});
const vegetables = ["Tomato", "Cabbage", "Potato"];
let temp2;
