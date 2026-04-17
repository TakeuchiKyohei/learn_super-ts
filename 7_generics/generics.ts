function copy<T extends { name: string }>(value: T): T {
  return value;
}
console.log(copy({name: "Taro"}));
