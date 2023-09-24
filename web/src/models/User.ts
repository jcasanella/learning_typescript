import { Model } from "./Model";

interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

const rootUrl = 'http://localhost:3000';

export class User extends Model<UserProps> {

}