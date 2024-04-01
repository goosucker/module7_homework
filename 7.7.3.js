const users = [
  {name: 'Oleg', age: 47},
  {name: 'Shaman', age: 28},
  {name: 'Mityai', age: 12}
];
let olderUsers = []
for (let i = 0; i < users.length; i++) {
  if (users[i].age >= 18) {
    olderUsers.push(users[i]);
  }
};
let userName = [];
for (let j = 0; j < users.length; j++) {
    userName.push(users[j].name);
};
