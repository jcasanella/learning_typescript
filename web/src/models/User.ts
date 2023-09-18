import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Sync } from './Sync';

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

export class User {
    private _events = new Eventing();
    private _sync = new Sync<UserProps>('http://localhost:3000');
    private _attributes: Attributes<UserProps>;

    constructor(data: UserProps) {
        this._attributes = new Attributes<UserProps>(data);
    }

    public get events() {
        return this._events;
    } 

    public get sync() {
        return this._sync;
    }

    public get attributes() {
        return this._attributes;
    }
}