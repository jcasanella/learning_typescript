import { User } from "./models/User";

const user = new User({ name: 'Jordi', age: 42 });

console.log(user.get('name'));
console.log(user.get('age'));

// console.log(user.get('wrong'));