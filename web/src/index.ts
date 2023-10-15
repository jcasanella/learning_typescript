import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";
import { UserEdit } from "./views/UserEdit";
import { UserList } from "./views/UserList";

const user = User.build({ name: 'Jordi', age: 42 });
const element = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const userEdit = new UserEdit(element!, user);
userEdit.render();
console.log(userEdit);

const users = new Collection('http://localhost:3000/users', (json: UserProps) => { return User.build(json); });

users.on('change', () => {
    const root = document.getElementById('root');
    if (root) {
        new UserList(root, users).render();
    }
});

users.fetch();