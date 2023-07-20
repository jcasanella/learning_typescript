import { User } from "./models/User";

const user = new User({ name: 'Jordi', age: 42 });

console.log(user.get('name'));
console.log(user.get('age'));

user.set({ name: 'peter', age: 20});

user.on('change', () => { console.log('Test1') });
user.on('change', () => { console.log('Test2') });

user.on('hover', () => { console.log('Test') });

console.log(user);
