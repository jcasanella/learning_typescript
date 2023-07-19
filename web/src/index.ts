import { User } from "./models/User";

const user = new User({ name: 'Jordi', age: 42 });

console.log(user.get('name'));
console.log(user.get('age'));

user.set({ name: 'peter', age: 20});
console.log(user);
