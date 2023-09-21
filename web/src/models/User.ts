import { AxiosResponse } from 'axios';
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

    set(update: UserProps): void {
        this._attributes.set(update);
        this._events.trigger('change');
    }

    fetch(): void {
        const id = this._attributes.get('id');
        if (typeof id !== 'number') {
            throw new Error('Cannot fetch without an id');
        }

        this._sync.fetch(id)
            .then((resp: AxiosResponse): void => {
                console.log(resp.data);
                this.set(resp.data);
            });
    }

    save(): void {
        this._sync.save(this._attributes.data)
        .then((resp: AxiosResponse): void => {
            console.log(resp.status);
            this.trigger('save');
        })
        .catch((_) => this.trigger('error'));
    }
}