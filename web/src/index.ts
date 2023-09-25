import { User } from './models/User';

const user = User.build({ name: 'Peter', age: 20, id: 1 });

user.on('save', () => {
    console.log(user);
});
user.set({ name: 'TestName' });
console.log(user.get('name'));

user.fetch();

user.save();

