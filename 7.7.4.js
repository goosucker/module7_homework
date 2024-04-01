const person = {
  firstName: 'John',
  secondName: 'Smith'
}
function setFullName(obj) {
  return obj = {
    firstName: `${this.firstName}`,
    secondName: `${this.secondName}`,
    fullName: `${this.firstName} ${this.secondName}`
  };
}
const setPersonFullName = setFullName.bind(person);
console.log(setPersonFullName())