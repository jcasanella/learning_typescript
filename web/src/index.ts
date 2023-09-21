import { User } from './models/User';

const user = new User({ name: 'Peter', age: 20, id: 1 });

user.events.on('save', () => {
    console.log(user);
});
user.set({ name: 'TestName' });
console.log(user.get('name'));

user.save();

