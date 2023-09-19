import { User } from './models/User';

const user = new User({ name: 'Peter', age: 20 });

user.events.on('change', () => {
    console.log('change!');
});

user.events.trigger('change');

console.log(user.get('name'));

