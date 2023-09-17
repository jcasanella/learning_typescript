import { Eventing } from './Eventing';
import { Sync } from './Sync';

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

export class User {
    private events = new Eventing();
    private sync = new Sync<UserProps>('http://localhost:3000');

    constructor(private readonly data: UserProps) {}

    get(propName: string): string|number|undefined {
        const keys = Object.keys(this.data);
        if (keys.filter((_) => _ === propName).length !== 1) {
            throw new Error(`Not valid key: ${propName}`);
        }

        const keyProp = propName as keyof UserProps;
        return this.data[keyProp];
    }

    set(data: UserProps) {
        Object.assign(this.data, data);
    }

    sync() {}
}