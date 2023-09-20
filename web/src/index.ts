import { User } from './models/User';

const user = new User({ name: 'Peter', age: 20, id: 1 });

user.events.on('change', () => {
    console.log('change!');
});
user.set({ name: 'TestName' });
console.log(user.get('name'));

user.fetch();

