import { User } from "./models/User";
import { UserEdit } from "./views/UserEdit";
import { UserForm } from "./views/UserForm";

const user = User.build({ name: 'Jordi', age: 42 });
const element = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const userEdit = new UserEdit(element!, user);
userEdit.render();
console.log(userEdit);

// const collection = User.buildCollection();

// collection.on('change', () => {
//     console.log(collection);
// });

// collection.fetch();