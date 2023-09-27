import { User } from "./models/User";
import { UserForm } from "./views/UserForm";

const element = document.getElementById('#root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const userForm = new UserForm(element!);
userForm.render();

const collection = User.buildCollection();

collection.on('change', () => {
    console.log(collection);
});

collection.fetch();