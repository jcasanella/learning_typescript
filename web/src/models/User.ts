import { Attributes } from './Attributes';
import { Callback, Eventing } from './Eventing';
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

    get events() {
        return this._events;
    } 

    get sync() {
        return this._sync;
    }

    get attributes() {
        return this._attributes;
    }

    get on() {
        return this._events.on;
    }

    get trigger() {
        return this._events.trigger;
    }

    get get() {
        return this._attributes.get;
    }
}