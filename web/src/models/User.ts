import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

export class User {
    private events: Eventing = new Eventing();

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

    fetch(): void {
        axios.get(`localhost:3000/users/${this.get('id')}`)
            .then((resp: AxiosResponse): void => {
                this.set(resp.data);
            });
    }

    save(): void {
        const id = this.get('id');
        if (id) {
            axios.put(`http://localhost:3000/users/${id}`, this.data);
        } else {
            axios.post('http://localhost:3000/users', this.data);
        }
    }
}