import { User } from './models/User';

const user = new User({ name: 'Peter', age: 20 });
user.save();

user.fetch();

setTimeout(() => {
    console.log(user);
}, 4000);