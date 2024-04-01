function printInfo() {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
}
const person = {
  name: 'Oleg',
  age: 14
}
printInfo.call(person);